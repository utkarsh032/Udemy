import { sendOtp, verifyOtp, signUpUser, loginUser, forgotPassword, resetPassword, checkForToken, addToCart, showCartItems, addToWishlist, showWishlist } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from Udemy API" });
});

userRouter.post("/send-otp", sendOtp);

userRouter.post("/verify-otp", verifyOtp);

userRouter.post("/signup", signUpUser);

userRouter.post("/login", loginUser);

userRouter.post("/forgot-password", forgotPassword);

userRouter.post("/reset-password", resetPassword)

userRouter.get("/auth/get-user-details", checkForToken,async (req, res) => {
    console.log(req.user);
    const userId = req.user._id;

    const user = await User.findOne({ _id: userId });

    res.status(200).json({ name: user.name, email: user.email });
})

userRouter.post("/cart", checkForToken, addToCart);

userRouter.get("/cart", checkForToken, showCartItems);

userRouter.post("/wishlist", checkForToken, addToWishlist);

userRouter.get("/wishlist", checkForToken, showWishlist);

export { userRouter };


