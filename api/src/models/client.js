const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
   sequelize.define(
      "user_data",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
         },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               isEmail: true,
            },
         },
         firstname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         lastname: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        administrator: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 'false',
         },
      },
      {
         timestamps: false,
      }
   );
};
