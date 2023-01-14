const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// exporto el modelo

module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define(
      "category",
      {
         id: {
            type: DataTypes.STRING,
            primaryKey: true,
         },
         category: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         title: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         description: {
            type: DataTypes.STRING,
            default: "Amazing",
         },
         pagecount: {
            type: DataTypes.INTEGER,
         },
      },
      /* {
         sequelize,
         paranoid: true,
         timestamps: true,
         // If you want to give a custom name to the deletedAt column
         deletedAt: "destroyTime",
      } */
   );
};
