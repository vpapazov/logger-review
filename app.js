

let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let hostname = 'localhost';
let port = 3000;
let app = express();
let router = express.Router();
let states = require('./states');


app.use(bodyParser.json());

 app.get('/', (req, res) => {
   res.end();
 })

app.use('/states', states);

module.exports = router;

 app.listen(port, () => {
   console.log('server connected');
 })
