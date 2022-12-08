const repository = require("../../../repositories/car.repository");

const CarService = {
  findAll: async () => {
    return await repository.getAll();
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
