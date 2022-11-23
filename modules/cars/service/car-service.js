const { Car } = require("../../../models");

const CarService = {
  findAll: async () => {
    return await Car.findAll({});
  },

  create: async (data) => {
    return await Car.create(data);
  },

  findOne: async (id) => {
    const model = await Car.findByPk(id);
    return model;
  },

  update: async (id, data) => {
    const model = await CarService.findOne(id);

    await model.update(data);
    return await model.reload();
  },

  delete: async (id) => {
    const model = await CarService.findOne(id);

    await model.destroy();
  },
};

module.exports = CarService;
