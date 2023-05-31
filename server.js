const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

// CREATE TABLE comentarios (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   autor VARCHAR(255) NOT NULL,
//   contenido TEXT NOT NULL,
//   fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );


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

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());


  app.use(
    session({
      secret: 'andres2001',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Cambia a true si usas HTTPS
    })
  );

  app.use(express.json());
  app.use(cors())



  app.post('/registro', (req, res) => {
    const { nombre, email, password } = req.body;
  
    // Verificar si el usuario ya existe en la base de datos
    const checkQuery = 'SELECT * FROM usuarios WHERE nombre = ? OR email = ?';
    connection.query(checkQuery, [nombre, email], (checkError, checkResults) => {
      if (checkError) {
        console.error('Error al verificar el usuario:', checkError);
        res.status(500).json({ error: 'Error al verificar el usuario.' });
      } else {
        if (checkResults.length > 0) {
          // El usuario ya está registrado
          res.status(409).json({ error: 'El usuario ya está registrado.' });
        } else {
          // Insertar el nuevo usuario en la base de datos
          const insertQuery = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
          connection.query(insertQuery, [nombre, email, password], (insertError, insertResult) => {
            if (insertError) {
              console.error('Error al crear un usuario:', insertError);
              res.status(500).json({ error: 'Error al crear un usuario.' });
            } else {
              res.json({ message: 'Usuario creado correctamente.' });
            }
          });
        }
      }
    });
  });


  app.post('/details/:game_id', (req, res) => {
    const { contenido } = req.body;
    const autor = req.session.user.nombre; // Obtener el nombre del usuario logeado
    
    if (!autor) {
      // Si no hay un usuario logeado, devolver un error o un mensaje de no autorizado
      res.status(401).json({ error: 'Debe iniciar sesión para enviar comentarios.' });
      return;
    }
    
    const sql = 'INSERT INTO comentarios (autor, contenido) VALUES (?, ?)';
    connection.query(sql, [autor, contenido], (error, result) => {
      if (error) {
        console.error('Error al agregar el comentario:', error);
        res.status(500).json({ error: 'Error al agregar el comentario.' });
      } else {
        res.json({ message: 'Comentario agregado correctamente.' });
      }
    });
  });



  app.post('/comentarios', (req, res) => {
    const { autor, contenido } = req.body;
  
    const sql = 'INSERT INTO comentarios (autor, contenido) VALUES (?, ?)';
    connection.query(sql, [autor, contenido], (error, result) => {
      if (error) {
        console.error('Error al agregar el comentario:', error);
        res.status(500).json({ error: 'Error al agregar el comentario.' });
      } else {
        res.json({ message: 'Comentario agregado correctamente.' });
      }
    });
  });
  
  app.get('/comentarios', (req, res) => {
    const sql = 'SELECT * FROM comentarios';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error al obtener los comentarios:', error);
        res.status(500).json({ error: 'Error al obtener los comentarios.' });
      } else {
        res.json(results);
      }
    });
  });





const port = 3001;



app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});