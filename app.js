const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/database')
var cors = require('cors');

const gameRoutes = require('./routs/gameR');

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

db.authenticate().then(() => console.log('database run'))

db.sync().then(() => {
  console.log('inserted')
  app.use(gameRoutes);
}).catch(err => console.log(err))

app.listen(3000);