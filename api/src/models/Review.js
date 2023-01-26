 const { DataTypes } = require('sequelize');
 

    module.exports = (sequelize) => {
        sequelize.define(
            'review',
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                    unique: true,
                },
                rating: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: true,
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
    }

