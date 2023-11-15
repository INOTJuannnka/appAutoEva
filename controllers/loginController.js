const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.login = async (req, res) =>{
  const { username, password } = req.body;
  console.log(username, password);
  const query = 'SELECT * FROM usuario WHERE USU_CORREO = ? AND USU_CLAVE = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
      return;
    }

    if (results.length > 0) {
      // Usuario autenticado
      const token = jwt.sign({ username }, 'secreto', { expiresIn: '1h' });
      res.json({ token });
    } else {
      // Credenciales inválidas
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  });
}