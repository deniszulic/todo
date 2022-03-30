import express from "express";
import cors from 'cors'

const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const db = require('../util/database')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

db.authenticate().then(() => console.log('connected')).catch(err => console.log(err))
app.use('/', require('../routes/todo'))

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});