const CarService = require("../service/car.service.js");
const formidableMiddleware = require("formidable");
const cloudinaryConfig = require("../../../config/cloudinary.js");
const jwt = require("../../../utils/jwt.js");

const CarController = {
  findAll: async (req, res) => {
    if (
      (req.query.driverType != null) &
      (req.query.availableAt != null)
    ) {
      const driverType = req.query.driverType;
      const availableAt = req.query.availableAt;
      var capacity = req.query.capacity;

      return await CarService.filterCars(driverType, availableAt, capacity)
        .then((data) => {
          res.status(200).json({
            data: data,
          });
        })
        .catch((err) => {
          console.error(err);
          throw err;
        });
    }

    if (req.query.capacity != null) {
      const capacity = req.query.capacity;
      return await CarService.findByCapacity(capacity)
        .then((data) => {
          res.status(200).json({
            data: data,
          });
        })
        .catch((err) => {
          console.error(err);
          throw err;
        });
    }
    
    if (req.query.driverType === undefined && req.query.availableAt != null) {
      const availableAt = req.query.availableAt;
      return await CarService.findByDate(availableAt)
        .then((data) => {
          res.status(200).json({
            data: data,
          });
        })
        .catch((err) => {
          console.error(err);
          throw err;
        });
    }

    if (req.query.driverType != null && req.query.availableAt === undefined) {
      const driverType = req.query.driverType;
      return await CarService.findByDriverType(driverType)
        .then((data) => {
          res.status(200).json({
            data: data,
          });
        })
        .catch((err) => {
          console.error(err);
          throw err;
        });
    }

    return await CarService.findAll()
      .then((data) => {
        res.status(200).json({
          data: data,
        });
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },

  create: async (req, res) => {
    const form = formidableMiddleware({});
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1];
    // const decodedToken = await jwt.checkTokenJwt(token);

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      if (
        fields.manufacture == undefined ||
        fields.model == undefined ||
        fields.price == undefined ||
        fields.driverType == undefined ||
        fields.description == undefined ||
        fields.transmission == undefined ||
        fields.capacity == undefined ||
        files.image == undefined ||
        fields.year == undefined ||
        fields.availableAt == undefined
      ) {
        res.json({ message: "Data not complete" });
        return;
      }

      cloudinaryConfig.uploader.upload(
        files.image.filepath,
        function (err, result) {
          if (err) {
            next(err);
            return;
          }
          CarService.create({
            plate: fields.plate,
            manufacture: fields.manufacture,
            model: fields.model,
            price: fields.price,
            driverType: fields.driverType,
            description: fields.description,
            transmission: fields.transmission,
            capacity: fields.capacity,
            year: fields.year,
            availableAt: fields.availableAt,
            image: result.secure_url,
          }).then((result) => {
            console.log(fields.availableAt);
            res.status(201).json({
              message: "Add Car",
              body: result,
            });
          });
        }
      );
    });
  },

  findOne: async (req, res) => {
    const data = await CarService.findOne(req.params.id)
      .then((data) => {
        if (data == null) {
          res.status(404).json({
            message: "Data car not found",
          });
          return;
        }
        res.status(200).json({
          data: data,
        });
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },

  update: async (req, res) => {
    const form = formidableMiddleware({});
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1];
    // const decodedToken = await jwt.checkTokenJwt(token);

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      CarService.findOne(req.params.id)
        .then((data) => {
          if (data == null) {
            res.status(404).json({
              message: "Data car not found",
            });
            return;
          }
          cloudinaryConfig.uploader.upload(
            files.image.filepath,
            function (err, result) {
              if (err) {
                next(err);
                return;
              }
              CarService.update(
                {
                  plate: fields.plate,
                  model: fields.model,
                  price: fields.price,
                  description: fields.description,
                  driverType: fields.driverType,
                  transmission: fields.transmission,
                  capacity: fields.capacity,
                  year: fields.year,
                  availableAt: fields.availableAt,
                  image: result.secure_url,
                },
                req.params.id
              );
              return res.status(202).json({
                message: "Update Data Car",
                body: data,
              });
            }
          );
        })
        .catch((err) => {
          console.error(err);
          throw err;
        });
    });
  },

  delete: async (req, res) => {
    const id = req.params.id;
    const carById = await CarService.findOne(id, res);

    if (carById == null) {
      res.status(404).json({ message: `Car not found with id: ${id}` });
      return;
    }

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decodedToken = await jwt.checkTokenJwt(token);

    await CarService.update({ deletedBy: decodedToken.email }, id);

    CarService.delete(id)
      .then((data) => {
        res.status(202).json({
          data: `Data car id: ${id} deleted by ${decodedToken.email}`,
        });
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },
};

module.exports = CarController;
