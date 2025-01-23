import { connect } from "mongoose";
import "dotenv/config";

const DBS_URL = process.env.DBS_URL;

async function dbConnection() {
    try {
        await connect(DBS_URL);
        console.log("Database connected successfuly");
    } catch (error) {
        console.log(error.message);
    }
}

export { dbConnection };