const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
   sequelize.define(
       "payment",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
         },
         amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
         },
         provider: {
            type: DataTypes.STRING,
             allowNull: false,
            default:'cash'
         },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 'false',
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
