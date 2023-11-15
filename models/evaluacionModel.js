// controllers/evaluacionController.js

const connection = require('../config/db');

// Obtener todas las evaluaciones
exports.getEvaluaciones = async (req, res) => {
  const query = 'SELECT * FROM evaluacion';
  connection.query(query, (error, results) => {
    if (error) {  
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json(results);
    }
  });
};

// Crear una nueva evaluación
exports.createEvaluacion = async (req, res) => {
  const { LAB_ID, PER_ID, USEROL_ID, EVA_ESTADO, EVA_PUNTAJE, EVA_RESULTADO, EVA_EVIDENCIA } = req.body;
  const query = `
    INSERT INTO evaluacion (LAB_ID, PER_ID, USEROL_ID, EVA_ESTADO, EVA_PUNTAJE, EVA_RESULTADO, EVA_EVIDENCIA)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [LAB_ID, PER_ID, USEROL_ID, EVA_ESTADO, EVA_PUNTAJE, EVA_RESULTADO, EVA_EVIDENCIA];
  
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      res.status(201).json({ message: 'Evaluación creada exitosamente' });
    }
  });
};

// Actualizar una evaluación
  exports.updateEvaluacion = async (req, res) => {
    const id = req.params.id;
  const { LAB_ID, PER_ID, USEROL_ID, EVA_ESTADO, EVA_PUNTAJE, EVA_RESULTADO, EVA_EVIDENCIA } = req.body;
  const query = `
    UPDATE evaluacion
    SET LAB_ID = ?, PER_ID = ?, USEROL_ID = ?, EVA_ESTADO = ?, EVA_PUNTAJE = ?, EVA_RESULTADO = ?, EVA_EVIDENCIA = ?
    WHERE EVA_ID = ?
  `;
  const values = [LAB_ID, PER_ID, USEROL_ID, EVA_ESTADO, EVA_PUNTAJE, EVA_RESULTADO, EVA_EVIDENCIA, id];
  
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json({ message: 'Evaluación actualizada exitosamente' });
    }
  });
  };

// Eliminar una evaluación
exports.deleteEvaluacion = async (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM evaluacion WHERE EVA_ID = ?';
  
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json({ message: 'Evaluación eliminada exitosamente' });
    }
  });
};
