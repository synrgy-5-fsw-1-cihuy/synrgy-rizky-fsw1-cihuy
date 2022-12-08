const repository = require("../../../repositories/user.repository");

const CarService = {
  userById: async (id) => {
    return await repository.getById(id);
  },

  userByEmail: async (email) => {
    return await repository.getByEmail(email);
  },

  createUser: async (data) => {
    return await repository.create(data);
  },
};

module.exports = CarService;
