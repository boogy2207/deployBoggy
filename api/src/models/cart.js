const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
   sequelize.define(
      "cart",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
         },
         quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 1,
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
