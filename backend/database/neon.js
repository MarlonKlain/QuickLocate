/**
 * Initializes and exports a Neon database client using the connection URL from environment variables.
 *
 * - Loads environment variables from a `.env` file using `dotenv`.
 * - Creates a Neon database client instance with the `DATABASE_URL` environment variable.
 *
 * @module database
 * @see {@link https://neon.tech/docs/serverless/serverless-driver}
 * @see {@link https://www.npmjs.com/package/dotenv}
 */
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const database = neon(process.env.DATABASE_URL);

export default database;
