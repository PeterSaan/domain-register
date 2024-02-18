import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/insInfo.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/insInfo.html'));
    console.log(req.query);
});

app.get('/ordered.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/ordered.html'));
    console.log(req.query);
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});