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
    const domainName = req.query.domain;
    console.log(domainName);
    res.sendFile(path.join(dirName + '/public/insInfo.html'));
    if (typeof domainName !== undefined || domainName !== '') {
        await db.insert(domain).values({ url: `https://${domainName}.ee` });
        console.log(`Domain '${domainName}' added to database`);
    } else if (typeof domainName == undefined || domainName == '') {
        console.log(`Domain '${domainName}' isn't an apliccable domain name`);
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