import Express from "express";
import bodyParser from 'body-parser'

const cors = require('cors')
const Consign = require('consign')
const app = Express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

Consign()
    .include('app/routes')
    .then('config/dbConnection.ts')
    .into(app)

module.exports = app