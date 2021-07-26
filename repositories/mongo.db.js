import mongodb from "mongodb";
import { mongoConnString } from "../config.js";
function getClient () {
    return new mongodb.MongoClient(mongoConnString);
} 
export { getClient }