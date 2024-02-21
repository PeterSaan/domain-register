import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from './database/connection.js'
import { domain, owner } from './database/schema.js'

const app = express();
const port = 3000;
const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(dirName + '/public/index.html'));
});

app.get('/insInfo.html', async (req, res) => {
    res.sendFile(path.join(dirName + '/public/insInfo.html'));
    if (req.query.domain !== undefined || req.query.domain.trim() !== '') {
        await db.insert(domain).values({ url: `https://${req.query.domain}.ee` });
        console.log("Domain added to database");
    } else {
        console.log('Domain is empty');
        res.sendFile(path.join(dirName + '/public/index.html'));
    }
});

app.get('/ordered.html', async (req, res) => {
    res.sendFile(path.join(dirName + '/public/ordered.html'));
    console.log(req.query);
    Object.keys(req.query).forEach(async (e) => {
        await db.insert(owner).values({ e: `${req.query[e]}` });
    });
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});