const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')
const app = express()
const mysql = require('mysql')


const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'employees'
})
app.us
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

  app.get('/salarios', function (req, res) {
    connection.query('select avg(salary) as salario,extract(year from from_date) as ano from salaries group by extract(year from from_date) order by ano asc',
      function (error, results, fields) {
        if (error)
          res.json(error);
        else
          res.json(results);
        //connection.end();
      });
  });
  var server = app.listen(80)