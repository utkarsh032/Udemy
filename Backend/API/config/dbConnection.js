import { connect } from "mongoose";
import "dotenv/config";

const MDBS_URL = process.env.MDBS_URL;

async function dbConnection() {
    try {
        await connect(MDBS_URL);
        console.log("Database connected successfuly");
    } catch (error) {
        console.log(error.message);
    }
}

export { dbConnection };