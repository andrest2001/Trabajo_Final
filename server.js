const express = require('express');
const mysql = require('mysql');


const app = express()


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




  app.use(express.json());

  app.post('/registro', (req, res) => {
    const { nombre, email, password } = req.body;
  
    const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    connection.query(sql, [nombre, email, password], (error, result) => {
      if (error) {
        console.error('Error al crear un usuario:', error);
        res.status(500).json({ error: 'Error al crear un usuario.' });
      } else {
        res.json({ message: 'Usuario creado correctamente.' });
      }
    });
  });
  

