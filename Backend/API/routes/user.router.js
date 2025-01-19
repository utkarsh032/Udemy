import { sendOtp, verifyOtp, signUpUser, loginUser, forgotPassword, resetPassword, checkForToken, addToCart, showCartItems, addToWishlist, showWishlist } from "../controllers/user.controller.js";
import { Router } from "express";
import { User } from "../models/user.model.js";

const userRouter = Router();

// Welcome route
userRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from Udemy API" });
});

// Auth routes
userRouter.post("/send-otp", sendOtp);
userRouter.post("/verify-otp", verifyOtp);
userRouter.post("/signup", signUpUser);
userRouter.post("/login", loginUser);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", resetPassword);


// Get user details
userRouter.get("/auth/get-user-details", checkForToken, async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user details", error });
    }
});

// Cart routes
userRouter.post("/cart", checkForToken, addToCart);
userRouter.get("/cart", checkForToken, showCartItems);

// Wishlist routes
userRouter.post("/wishlist", checkForToken, addToWishlist);
userRouter.get("/wishlist", checkForToken, showWishlist);

export { userRouter };