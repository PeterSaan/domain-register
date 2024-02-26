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
    let domainName = req.query.domain;

    if (domainName !== undefined && domainName.trim() !== '') {
        await db.insert(domain).values({ url: `https://${domainName}.ee` });
        console.log(`Domain '${domainName}' added to database`);
    } else if (domainName === undefined || domainName.trim() === '') {
        console.log(`Domain '${domainName}' isn't an apliccable domain name`);
        res.sendFile(path.join(dirName + '/public/index.html'));
        return;
    }
    res.sendFile(path.join(dirName + '/public/insInfo.html'));
});

app.get('/ordered.html', async (req, res) => {
    res.sendFile(path.join(dirName + '/public/ordered.html'));
    let values = {};
    Object.keys(req.query).forEach(async (e) => {
        if(`${req.query[e]}`.trim() !== '') {
             values[e] = req.query[e].trim()
        }
    });
    await db.insert(owner).values(values);
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});