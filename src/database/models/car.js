"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init(
    {
      plate: DataTypes.STRING,
      manufacture: DataTypes.STRING,
      model: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      driverType: DataTypes.STRING,
      transmission: DataTypes.ENUM("Automatic", "Automanual", "Manual"),
      capacity: DataTypes.INTEGER,
      image: DataTypes.STRING,
      year: DataTypes.INTEGER,
      availableAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Car",
    }
  );
  return Car;
};
