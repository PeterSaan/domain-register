import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from './connection.js';

migrate(db, { migrationsFolder: 'database/migrations' }).then(process.exit);