const car = require('./car.js');
const user = require('./user.js');

module.exports = function(express) {
    const app = express();
  
    app.use('/cars', car(express));
    app.use('/users', user(express));
  
    return app;
}

