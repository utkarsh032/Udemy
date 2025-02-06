import { courseRouter } from "./API/routes/course.router.js";
import { dbConnection } from "./API/config/dbConnection.js";
import { userRouter } from "./API/routes/user.router.js";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";

const app = express();
const PORT = process.env.PORT || 4999;

const frontendUrl = ["https://udemy-e-learning.netlify.app", "http://localhost:5173"];

const corsOptions = {
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));


app.use(cookieParser());

app.use(express.json());

app.use(fileUpload({ useTempFiles: true }));

app.use("/user", userRouter);

app.use("/course", courseRouter);



app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Server started at PORT: ${PORT}`);
});
