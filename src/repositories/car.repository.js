const models = require("../database/models");
const Car = models.Car;
const { Op } = require("sequelize");

const getAll = async () => {
  return await Car.findAll();
};

const filterCars = async (driverType, availableAt, capacity) => {
  return await Car.findAll({
    where: {
      driverType,
      availableAt: {
        [Op.gte]: availableAt,
      },
      capacity: {
        [Op.gte]: capacity,
      },
    },
  });
};

const findCarsByCapacity = async (capacity) => {
  return await Car.findAll({
    where: {
      capacity: {
        [Op.gte]: capacity,
      },
    },
  });
};

const findCarsByDate = async (availableAt) => {
  return await Car.findAll({
    where: {
      availableAt: {
        [Op.gte]: availableAt,
      },
    },
  });
};

const findCarsByDriverType = async (driverType) => {
  return await Car.findAll({
    where: {
      driverType,
    },
  });
};

const getById = async (id) => {
  return await Car.findByPk(id);
};

const create = async (data) => {
  return await Car.create(data);
};

const update = async (data, id) => {
  return await Car.update(data, { where: { id: id } });
};

const deleteCar = async (id) => {
  return await Car.destroy({ where: { id: id } });
};

module.exports = {
  getAll,
  filterCars,
  findCarsByCapacity,
  findCarsByDate,
  findCarsByDriverType,
  getById,
  create,
  update,
  deleteCar,
};
