import { courseRouter } from "./API/routes/course.router.js";
import { userRouter } from "./API/routes/user.router.js";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnection } from "./API/config/dbConnection.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());

app.use(express.json());

app.use(fileUpload({ useTempFiles: true }));

app.use("/user", userRouter);

app.use("/course", courseRouter);

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Server started at PORT: ${PORT} and LIVE: https://udemy-j08o.onrender.com`);
});
