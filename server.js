const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'wikigames_db'
  });


connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});


app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
      if (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error al obtener usuarios');
      } else {
        res.json(results);
      }
    });
  });


app.listen(3000, () => {
    console.log('Servidor backend iniciado en el puerto 3000');
});


