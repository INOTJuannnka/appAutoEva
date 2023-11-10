const connection = require('../config/db');

exports.getUsuarios = async (req, res) => {
    const query = 'SELECT * FROM usuario';
  connection.query(query, (error, results) => {
    if (error) {  
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json(results);
    }
  });
}
exports.createUsuario = async (req, res) => {
    const {USR_IDENTIFICACION, USU_NOMBRE, USU_APELLIDO, USU_GENERO, USU_ESTUDIO, USU_TIPOID, USU_FOTO, USU_CLAVE, USU_CORREO, USU_ESTADO} = req.body;
    const query = `
      INSERT INTO usuario (USR_IDENTIFICACION, USU_NOMBRE, USU_APELLIDO, USU_GENERO, USU_ESTUDIO, USU_TIPOID, USU_FOTO, USU_CLAVE, USU_CORREO, USU_ESTADO)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [USR_IDENTIFICACION, USU_NOMBRE, USU_APELLIDO, USU_GENERO, USU_ESTUDIO, USU_TIPOID, USU_FOTO, USU_CLAVE, USU_CORREO, USU_ESTADO];

    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error interno del servidor');
      } else {
        res.status(201).json({ message: 'Usuario creado exitosamente' });
      }
    });
}
exports.updateUsuario = async (req, res) => {
    const id = req.params.id;
    const {USR_IDENTIFICACION, USU_NOMBRE, USU_APELLIDO, USU_GENERO, USU_ESTUDIO, USU_TIPOID, USU_FOTO, USU_CLAVE, USU_CORREO, USU_ESTADO} = req.body;
    const query = `
      UPDATE usuario
      SET USR_IDENTIFICACION = ?, USU_NOMBRE = ?, USU_APELLIDO = ?, USU_GENERO = ?, USU_ESTUDIO = ?, USU_TIPOID = ?, USU_FOTO = ?, USU_CLAVE = ?, USU_CORREO = ?, USU_ESTADO = ?
      WHERE USU_ID = ?
    `;
    const values = [USR_IDENTIFICACION, USU_NOMBRE, USU_APELLIDO, USU_GENERO, USU_ESTUDIO, USU_TIPOID, USU_FOTO, USU_CLAVE, USU_CORREO, USU_ESTADO, id];

    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json({ message: 'Usuario actualizado exitosamente' });
      }
    });
}
exports.deleteUsuario = async (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM usuario WHERE USU_ID = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json({ message: 'Usuario eliminado exitosamente' });
      }
    });
}
