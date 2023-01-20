import mongoose, { connection } from "mongoose";
import {DB_CONNECTION_STRING} from "../configs";
import logger from "../utils/logger";


let database;
const connect = async() => {
    const MONGODB_URL = DB_CONNECTION_STRING;
    if (database) return;
    mongoose.connect(MONGODB_URL)
        .then((connection) => {
            database = connection;
            logger.info("Database synced");

        }).catch((err) => {
            logger.error(err.massage);

        })
}
export { connect };