// Importar el modelo LaborModel
const LaborModel = require('../models/laborModel'); // Asegúrate de que la ruta sea correcta

// Definir funciones del controlador
const LaborController = {
  createLabor: (req, res) => {
    const { TL_ID, LAB_NOMBRE, LAB_HORAS } = req.body;
    LaborModel.create(TL_ID, LAB_NOMBRE, LAB_HORAS, (error, labId) => {
      if (error) {
        return res.status(500).json({ error: 'Error al crear el registro.' });
      }
      return res.status(201).json({ labId });
    });
  },

  getLaborById: (req, res) => {
    const { labId } = req.params;
    LaborModel.getById(labId, (error, labor) => {
      if (error) {
        return res.status(500).json({ error: 'Error al obtener el registro.' });
      }
      if (!labor) {
        return res.status(404).json({ error: 'Registro no encontrado.' });
      }
      return res.status(200).json({ labor });
    });
  },

  updateLabor: (req, res) => {
    const { labId } = req.params;
    const { TL_ID, LAB_NOMBRE, LAB_HORAS } = req.body;
    LaborModel.update(labId, TL_ID, LAB_NOMBRE, LAB_HORAS, (error, affectedRows) => {
      if (error) {
        return res.status(500).json({ error: 'Error al actualizar el registro.' });
      }
      if (affectedRows === 0) {
        return res.status(404).json({ error: 'Registro no encontrado.' });
      }
      return res.status(200).json({ success: true });
    });
  },

  deleteLabor: (req, res) => {
    const { labId } = req.params;
    LaborModel.delete(labId, (error, affectedRows) => {
      if (error) {
        return res.status(500).json({ error: 'Error al eliminar el registro.' });
      }
      if (affectedRows === 0) {
        return res.status(404).json({ error: 'Registro no encontrado.' });
      }
      return res.status(200).json({ success: true });
    });
  },
};

// Exportar el controlador LaborController
module.exports = LaborController;
