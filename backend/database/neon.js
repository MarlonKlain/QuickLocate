import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const database = neon(process.env.DATABASE_URL);

export default database;
