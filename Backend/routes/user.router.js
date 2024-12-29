import { sendOtp, signUpUser, loginUser, forgotPassword, resetPassword, checkForToken } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from Udemy API" });
});

userRouter.post("/send-otp", sendOtp);

userRouter.post("/signup", signUpUser);

userRouter.post("/login", loginUser);

userRouter.post("/forgot-password", forgotPassword);

userRouter.post("/reset-password", resetPassword);

//userRouter.use("/auth/*",checkForToken);


userRouter.get("/auth/get-user-details", async (req, res) => {
    const userId = req.user._id;

    const user = await User.findOne({ _id: userId });

    res.status(200).json({ name: user.name, email: user.email });
})

export { userRouter };
