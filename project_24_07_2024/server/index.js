import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './route/routes.js';

const app = express()
const PORT = 8000

Connection()

app.use(cors())

app.use(bodyParser.json({extended : true }))
app.use(bodyParser.urlencoded({extended : true }))

app.use('/', Routes)
app.use('/uploads', express.static('uploads'))

app.listen(PORT, () => console.log("Server Running On Port Number "+PORT))