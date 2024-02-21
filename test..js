import express from 'express';
import path from 'path';
import { db } from './database/connection.js'
import { domain, owner } from './database/schema.js'

const app = express();
const port = 3000;
const fullDir = import.meta.dirname;
console.log(path.join(fullDir + '/public/insInfo.html'));