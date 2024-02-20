import express from 'express';
import path from 'path';
import { db } from './database/connection.js'
import { domain, owner } from './database/schema.js'

const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/insInfo.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/public/insInfo.html'));
    console.log(req.query);
    await db.insert(domain).values({ url: `https://${req.query.domain}.ee` });
});

app.get('/ordered.html', async (req, res) => {
    res.sendFile(path.join(__dirname + '/public/ordered.html'));
    console.log(req.query);
    Object.keys(req.query).forEach(async (e) => {
        await db.insert(owner).values({ e: req.query[e]});
    });
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});