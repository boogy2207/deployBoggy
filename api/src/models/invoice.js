const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
   sequelize.define(
      "invoice",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
         },
         total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
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
