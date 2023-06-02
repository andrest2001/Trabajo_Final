const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

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


  app.post('/login', (req, res) => {
    const { nombre, password } = req.body;
  
    const query = `SELECT * FROM usuarios WHERE nombre = '${nombre}' AND password = '${password}'`;
  
    connection.query(query, (err, results) => {
      if (err) throw err;
  
      if (results.length > 0) {
        const user = results[0];
        req.session.user = user; // Establecer la sesión
        res.status(200).json({ message: 'Inicio de sesión exitoso', user });
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    });
  });






const port = 3001;

app.get('/comentarios/:game_id', (req, res) => {
  const gameId = req.params.game_id;
  const query = 'SELECT * FROM comentarios WHERE game_id = ?';

  connection.query(query, [gameId], (error, results) => {
    if (error) {
      console.error('Error al obtener los comentarios:', error);
      res.status(500).json({ error: 'Error al obtener los comentarios.' });
    } else {
      res.json(results);
    }
  });
});

app.post('/comentarios', (req, res) => {
  const { usuario_id, game_id, contenido } = req.body;
  const query = 'INSERT INTO comentarios (usuario_id, game_id, contenido) VALUES (?, ?, ?)';

  connection.query(query, [usuario_id, game_id, contenido], (error, results) => {
    if (error) {
      console.error('Error al agregar el comentario:', error);
      res.status(500).json({ error: 'Error al agregar el comentario.' });
    } else {
      res.json({ message: 'Comentario agregado correctamente.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});