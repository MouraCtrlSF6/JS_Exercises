const express = require('express');
const consign = require('consign')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
consign().include('Routes').into(app)

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server is listening on ${process.env.HOST}:${process.env.PORT}`)
})