import mongoose from "mongoose";
import {MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER} from "../config";

export const connectMongo = async () => {
    try {
        const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
        console.log(`I\'m trying to connect to mongo with url: ${url}`);
        await mongoose.connect(url)
            .then(() => console.log('Success connect to mongo'))

    } catch (e) {
        console.log('Unsuccessful connection to mongo')
        await connectMongo();
    }
}