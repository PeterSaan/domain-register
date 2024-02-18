import 'dotenv/config';
import { createConnection } from 'mysql';

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_DB_PASSWORD,
    database: 'domain_register'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

connection.end();