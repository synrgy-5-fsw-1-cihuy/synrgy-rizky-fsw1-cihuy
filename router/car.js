const controller = require('../modules/cars/controller/car-controller');


module.exports = function (express) {
    const route = express.Router();

    route.get('/', controller.findAll);
    route.get('/:id', controller.findOne);
    route.post('/', controller.create);
    route.put('/:id', controller.update);
    route.delete('/:id', controller.delete);

    return route;
}
