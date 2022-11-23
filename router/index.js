const car = require('./car.js');

module.exports = function(express) {
    const app = express();
  
    app.use('/cars', car(express));
  
    return app;
}

