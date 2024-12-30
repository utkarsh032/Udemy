import { User } from "../models/user.model.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import "dotenv/config";

const generateOtp = () => Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_USER_PASS,
    },
});

const otpStore = {};

const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const OTP = generateOtp();

        await transporter.sendMail({
            to: email,
            from: "udemy@gmail.com",
            subject: "OTP Verification for Udemy",
            html:
                `<p>OTP for Sign up on Udemy</p>
            <h2>${OTP}</h2>`,
        });

        otpStore[email] = OTP;

        res.status(200).json({
            message: "OTP has been send successfully",
            OTP
        });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: "Something went wrong" });
    }
}

const verifyOtp = (req, res) => {
  const { email, code } = req.body;

  if (otpStore[email] && otpStore[email] === Number(code)) {
    delete otpStore[email];
    return res
      .status(200)
      .json({ verified: true, message: "OTP verified successfully" });
  }

  res.status(400).json({ verified: false, message: "Invalid or expired OTP" });
};

const signUpUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        console.log(email, name, password);

        const chechUser = await User.findOne({ email });

        if (chechUser) {
            console.log("user already exist with this email");
            return res.status(400).json({ message: "user had signed up already" });
        }

        const hashPassword = await argon2.hash(password);

        const user = new User({
            name,
            email,
            password: hashPassword
        });

        await user.save();

        res.status(201).json({
            message: "Signup successful"
        })

    } catch (error) {
        console.log(error.message);
        res.status(401).json({ message: "Invalid credentials" });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            console.log("user is not present in database with this email");
            return res
                .status(400)
                .json({ message: "Incorrect email or password" });
        }

        const isValidUser = await argon2.verify(user.password, password);

        if (!isValidUser) {
            console.log("Incorrect password");
            return res.status(400).json({ message: "Incorrect email or password" });
        }

        const accessToken = jwt.sign(
            { id: user._id, name: user.name },
            process.env.JWT_ACCESS_PASS,
            { expiresIn: "1h" }
        );

        const refreshToken = jwt.sign(
            { id: user._id, name: user.name },
            process.env.JWT_REFRESH_PASS,
            { expiresIn: "7d" }
        );

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 1000,
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        console.log(accessToken);
        console.log(req.cookies.accessToken);
        console.log(refreshToken);

        res.status(200).json({ message: "login successful" });

    } catch (error) {
        console.log(error.message);
        res.status(401).json(error.message);
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            console.log("user is not present in database with this email");
            return res
                .status(400)
                .json({ message: "user not exist for this email" });
        }

        const resetToken = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_RESET_PASS, { expiresIn: "5m" });

        const OTP = generateOtp();

        await transporter.sendMail({
            to: email,
            from: "udemy@gmail.com",
            subject: "Forgot Password OTP for Udemy",
            html: `<p>OTP for Forgot Password on Udemy</p>
            <P>This OTP is valid for 5 minutes.</p>
            <h2>${OTP}</h2>`,
        });

        res.cookie("resetToken", resetToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 5 * 60 * 1000,
        });

        res.status(200).json({
            message: "OTP has been send successfully",
            OTP,
        });

    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }

}

const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;

        const resetToken = req.cookies.resetToken;

        if (!resetToken) {
            console.log("reset token has been deleted from cookies");
            return res
                .status(400)
                .json({ message: "Otp was valid for only 5 minutes" });
        }

        const decode = jwt.verify(resetToken, process.env.JWT_RESET_PASS);

        const user = await User.findOne({ _id: decode.id });

        const hashPassword = await argon2.hash(password);

        user.password = hashPassword;

        await user.save();

        res.status(200).json({ message: "Password updated successfully" });

    } catch (error) {
        console.log("Invalid reset token");
        res.status(400).json({ message: "Something went wrong" });
    }
}

const checkForToken = async (req, res, next) => {
    console.log("Enterd in tokenVarification.");

    const accessToken = req.cookies.accessToken;
    console.log(accessToken);

    if (accessToken) {
        try {
            console.log("In the If Part")
            const decode = jwt.verify(accessToken, process.env.JWT_ACCESS_PASS);

            const user = await User.findOne({ _id: decode.id });

            req.user = user;

            next();

        } catch (error) {
            console.log("invalid access token");
            res.status(401).json({ message: "Unauthorized Access" });
        }
    } else {
        console.log("In the else Part")
        try {
            const refreshToken = req.cookies["refreshToken"];
            console.log("refreshToken", refreshToken);

            if (!refreshToken) {
                console.log("Neither Access nor Refresh token is present");
                return res.status(401).json({ message: "Unauthorized Access" });
            }


            const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH_PASS);

            console.log(decode);
            const newAccessToken = jwt.sign(
                { id: decode.id, name: decode.name },
                process.env.JWT_ACCESS_PASS,
                { expiresIn: "1h" }
            );

            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 1000,
            });

            const user = await User.findOne({ _id: decode.id });

            req.user = user;

            next();

        } catch (error) {
            console.log("invalid refresh token");
            res.status(401).json({ message: "Unauthorized Access" });
        }
    }

}

const addToCart = async (req, res) => {
    try {
        // Step:1 Take the courseId
        // Step:2 get the user record by req.users
        // Step:3 Check if this course is already present in the enrolledCourse array. if yes return enrolled
        // Step:4 Check If the course is already in the add to cart.
        // Step:5 add the courseId into the cartItems of the user record
        // Step:6 Save the record

        //Step : 1
        const { courseId } = req.body;
        console.log("req.users", courseId);

        //Step : 2
        const user = req.user;

        //Step : 3
        const AlreadyPurchased = user.enrolledCourse.includes(courseId);

        if (AlreadyPurchased) {
            return res.status(201).json({ msg: "Already Purchased." });
        }

        // Step : 4
        // Checks if courseId exists in the cartItems or not
        const AlreadyInCart = user.cartItems.includes(courseId);

        if (AlreadyInCart) {
            return res.status(201).json({ msg: "Already present in Cart." });
        }

        // Step : 5
        user.cartItems.push(courseId);

        // Step : 6 
        await user.save();

        return res.status(201).json({ msg: "Added to Cart." });

    } catch (error) {

        return res.status(400).json({ error: error.message });

    }
}

const showCartItems = async (req, res) => {
    //
    try {

        const userId = req.user._id;

        const cartData = await User.findOne({ _id: userId }).populate("cartItems");

        return res.status(200).json(cartData.cartItems);

    } catch (error) {

        return res.status(400).json({ error: error.message });

    }


}

const addToWishlist = async (req, res) => {
    try {
        // Step:1 Take the courseId
        // Step:2 get the user record by req.users
        // Step:3 Check If the course is already in wishlist.
        // Step:4 add the courseId into the wishlist Array
        // Step:5 Save the record

        //Step : 1
        const { courseId } = req.body;
        console.log("req.users", courseId);

        //Step : 2
        const user = req.user;

        // Step : 3
        // Checks if courseId exists in the wishlist array
        const AlreadyInWishlist = user.wishList.includes(courseId);

        if (AlreadyInWishlist) {
            await user.updateOne({ $pull: { wishList: courseId } })
            return res.status(201).json({ msg: "Already in wishList. So Removed It" });
        }

        // Step : 5
        user.wishList.push(courseId);

        // Step : 6 
        await user.save();

        return res.status(201).json({ msg: "Added to Wishlist." });

    } catch (error) {

        return res.status(400).json({ error: error.message });

    }
}

const showWishlist = async (req, res) => {
    //
    try {

        const userId = req.user._id;

        const cartData = await User.findOne({ _id: userId }).populate("wishList");

        return res.status(200).json(cartData.wishList);

    } catch (error) {

        return res.status(400).json({ error: error.message });

    }


}


export {
    sendOtp,
    verifyOtp,
    signUpUser,
    loginUser,
    forgotPassword,
    resetPassword,
    checkForToken,
    addToCart,
    showCartItems,
    addToWishlist,
    showWishlist
};