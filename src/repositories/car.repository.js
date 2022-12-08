const models = require('../database/models');
const Car = models.Car;

const getAll = async () => {
    return await Car.findAll();
};

const getById = async (id) => {
    return await Car.findByPk(id);
};

const create = async (data) => {
    return await Car.create(data);
};

const update = async (data, id) => {
    return await Car.update(data, {where: {"id": id}});
};

const deleteCar = async (id) => {
    return await Car.destroy({where: {"id": id}});
};

module.exports = {getAll, getById, create, update, deleteCar};