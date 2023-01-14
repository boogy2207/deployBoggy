/** @format */

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// exporto el modelo

module.exports = (sequelize) => {
   // defino el modelo
   sequelize.define(
      "book",
      {
         id: {
            type: DataTypes.STRING,
            primaryKey: true,
         },
         title: {
            type: DataTypes.STRING,
            allowNull: false,
         },
          authors: {
            type: DataTypes.STRING,
            allowNull: false,
         },
          description: {
            type: DataTypes.STRING(10000),
         }, 
          category: {
            type: DataTypes.STRING,
            
         }, 
          pagecount: {
            type: DataTypes.STRING,
         },
         imagelink: {
            type: DataTypes.STRING,
            defaultValue:
               "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
         }, 
          language: {
            type: DataTypes.STRING,
         },   
            price: {
            type: DataTypes.STRING
         },   
      },
       
   );
};
