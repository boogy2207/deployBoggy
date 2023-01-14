const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// exporto el modelo

module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define(
      "user_payment_data",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
         },
         payment_type: {
            type: DataTypes.STRING,
            allowNull: false,
            default: "cash",
         },
         //enter throw google platform
         provider: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         account_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: "cash",
         },
      },
      {
         sequelize,
         paranoid: true,
         timestamps: true,
         // If you want to give a custom name to the deletedAt column
         deletedAt: "destroyTime",
      }
   );
};
