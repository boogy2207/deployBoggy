const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// exporto el modelo

module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define(
      "user",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
         }, 
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               isEmail: true,
            }, code: { type: DataTypes.STRING, 
               required: true },
            status: { type: DataTypes.STRING,
                required: true,
                 default: "UNVERIFIED" },
         },
         password:  { type:DataTypes.STRING,  allowNull: false,
            required: true },

         isValid: {
            type: DataTypes.BOOLEAN
         },
         /* roles: {
            type: DataTypes.ARRAY(DataTypes.STRING)
         }, */
         isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          isUser: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
          },

         //enter throw google platform

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