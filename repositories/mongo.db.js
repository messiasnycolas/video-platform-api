import mongoose from 'mongoose';
import { mongoConnString } from "../config.js";

async function connect() {
    return await mongoose.connect(
        mongoConnString, 
        { useNewUrlParser: true, useUnifiedTopology: true });
}

export { connect };