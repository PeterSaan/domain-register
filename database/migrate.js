import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from './connection.js';

migrate(db, { migrationsFolder: 'database/migrations' }).then(
    process.exit,
    Error ? console.error(Error()) : console.log("Everything went smoothly")
);