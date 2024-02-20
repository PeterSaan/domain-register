import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from './connection.js';

migrate(db, { migrationsFolder: './migrations' }).then(
    process.exit,
    process.exit ? console.log("Everything went smoothly") : console.error()
);