import 'dotenv/config';

/** @type { import("drizzle-kit").Config } */
export default {
    schema: './database/schema.js',
    out: './database/migrations',
    driver: 'mysql2',
    dbCredentials: {
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
  },
};