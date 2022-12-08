const CarService = require("../service/car.service.js");
const formidableMiddleware = require("formidable");
const cloudinaryConfig = require("../../../config/cloudinary.js");
const jwt = require("../../../utils/jwt.js");

const CarController = {
  findAll: async (req, res) => {
    const data = await CarService.findAll()
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
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decodedToken = await jwt.checkTokenJwt(token);

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      if (
        fields.name == undefined ||
        fields.price == undefined ||
        fields.size == undefined ||
        files.photo == undefined
      ) {
        res.json({ message: "Data not complete" });
        return;
      }

      cloudinaryConfig.uploader.upload(
        files.photo.filepath,
        function (err, result) {
          if (err) {
            next(err);
            return;
          }
          CarService.create({
            name: fields.name,
            price: fields.price,
            size: fields.size,
            photo: result.secure_url,
            createdBy: decodedToken.email,
          }).then((result) => {
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
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decodedToken = await jwt.checkTokenJwt(token);

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      if (
        fields.name == undefined ||
        fields.price == undefined ||
        fields.size == undefined ||
        files.photo == undefined
      ) {
        res.json({ message: "Data not complete" });
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
            files.photo.filepath,
            function (err, result) {
              if (err) {
                next(err);
                return;
              }
              CarService.update(
                {
                  name: fields.name,
                  price: fields.price,
                  size: fields.size,
                  photo: result.secure_url,
                  updatedBy: decodedToken.email,
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
