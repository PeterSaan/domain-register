import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2";

const connection = createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

export const db = drizzle(connection);