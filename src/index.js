import dotenv from "dotenv"
dotenv.config( { path: "./env" } )

import connectDB from "./db/index.js"

connectDB()














/*
------------- First Approach -------------
(Day-7 explanation)
import express from "express";
const app = express();

( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw Array;
    }
})();
*/