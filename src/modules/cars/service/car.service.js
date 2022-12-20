const repository = require("../../../repositories/car.repository");

const CarService = {
  findAll: async () => {
    return await repository.getAll();
  },

  filterCars: async(driverType, capacity, availableAt) => {
    return await repository.filterCars(driverType, capacity, availableAt)
  },

  findByCapacity: async (req) => {
    return await repository.findCarsByCapacity(req);
  },

  findByDate: async (req) => {
    return await repository.findCarsByDate(req);
  },

  findByDriverType: async (req) => {
    return await repository.findCarsByDriverType(req);
  },

  create: async (data) => {
    return await repository.create(data);
  },

  findOne: async (id) => {
    return await repository.getById(id);
  },

  update: async (data, id) => {
    return await repository.update(data, id);
  },

  delete: async (id) => {
    return await repository.deleteCar(id);
  },
};

module.exports = CarService;
