import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize

// Definir el modelo usuario que representa la tabla en la base de datos
const Usuario = db.define('usuario', {
    USU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USR_IDENTIFICACION : {
        type: DataTypes.DECIMAL
    },
    USU_NOMBRE : {
        type: DataTypes.STRING
    },
    USU_APELLIDO : {
        type: DataTypes.STRING
    },
    USU_GENERO : {
        type: DataTypes.STRING
    },
    USU_ESTUDIO : {
        type: DataTypes.STRING
    },
    USU_TIPOID : {
        type: DataTypes.STRING
    },
    USU_FOTO : {
        type: DataTypes.STRING
    },
    USU_CLAVE : {
        type: DataTypes.STRING
    },
    USU_CORREO : {
        type: DataTypes.STRING
    },
    USU_ESTADO : {
        type: DataTypes.INTEGER
    },
    USU_ROLID : {
        type: DataTypes.INTEGER
    } 
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});

export default Usuario;