import mongoose from "mongoose";
import {MONGODB_URI} from "./config.js";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

(async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log("EXITO - Connected to MongoDB Atlas!");
    } catch (err) {
        console.error("ERROR - ",err);
    } 
})(); 