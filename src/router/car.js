const controller = require("../modules/cars/controller/car.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const cors = require('cors');

module.exports = function (express) {
  const route = express.Router();

  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200// some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  route.use(cors(corsOptions));

  // COMPONENTS
  /**
   * @swagger
   * components:
   *      schemas:
   *          Car:
   *              type: object
   *              required:
   *                  - id
   *                  - name
   *                  - price
   *                  - size
   *                  - photo
   *              properties:
   *                  id:
   *                      type: integer
   *                      description: Auto-generated id of the car
   *                  name:
   *                      type: string
   *                      description: The name of the car
   *                  price:
   *                      type: string
   *                      description: The price of the car
   *                  size:
   *                      type: string
   *                      description: The size of the car
   *                  photo:
   *                      type: string
   *                      description: The photo url of the car
   *                  createdAt:
   *                      type: timestamp
   *                      description: The date the data was created
   *                  updatedAt:
   *                      type: timestamp
   *                      description: The date the data was updated
   *                  deletedAt:
   *                      type: timestamp
   *                      description: The date the data was deleted
   *                  createdBy:
   *                      type: string
   *                      description: The user who created the data
   *                  updatedBy:
   *                      type: string
   *                      description: The user who updated the data
   *                  deletedBy:
   *                      type: string
   *                      description: The user who deleted the data
   */

  /**
   * @swagger
   * components:
   *      schemas:
   *          CarRequest:
   *              type: object
   *              required:
   *                  - name
   *                  - price
   *                  - size
   *                  - photo
   *              properties:
   *                  name:
   *                      type: string
   *                      description: The name of the car
   *                  price:
   *                      type: string
   *                      description: The price of the car
   *                  size:
   *                      type: string
   *                      description: The size of the car
   *                  photo:
   *                      type: string
   *                      format: binary
   *                      description: The photo url of the car
   */

  /**
   * @swagger
   * components:
   *      securitySchemes:
   *          bearerAuth:
   *              type: http
   *              scheme: bearer
   *              bearerFormat: JWT
   */

  // GET ALL
  /**
   * @swagger
   * /cars:
   *      get:
   *          summary: Get all Car data
   *          tags: [Car]
   *          responses:
   *              "200":
   *                  description: Retrieve all cars
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/Car'
   */
  route.get("/", controller.findAll);

  // GET BY ID
  /**
   * @swagger
   * /cars/{id}:
   *      get:
   *          summary: Get Car data by id
   *          tags: [Car]
   *          security:
   *              -   bearerAuth: []
   *          parameters:
   *              -   in: path
   *                  name: id
   *                  schema:
   *                      type: integer
   *                  required: true
   *                  description: The car id
   *          responses:
   *              "200":
   *                  description: Retrieve car by id
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/Car'
   */
  route.get("/:id", controller.findOne);

  // POST
  /**
   * @swagger
   * /cars:
   *      post:
   *          summary: Create new car data
   *          tags: [Car]
   *          security:
   *              -   bearerAuth: []
   *          requestBody:
   *              description: Input for new car
   *              required: true
   *              content:
   *                  multipart/form-data:
   *                      schema:
   *                          $ref: '#/components/schemas/CarRequest'
   *          responses:
   *              "201":
   *                  description: Car successfully created
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/Car'
   */
  route.post("/", controller.create);

  // PUT
  /**
   * @swagger
   * /cars/{id}:
   *      put:
   *          summary: Update car data
   *          tags: [Car]
   *          security:
   *              -   bearerAuth: []
   *          parameters:
   *              -   in: path
   *                  name: id
   *                  schema:
   *                      type: integer
   *                  required: true
   *                  description: The car id
   *          requestBody:
   *              description: Input for updating car
   *              required: true
   *              content:
   *                  multipart/form-data:
   *                      schema:
   *                          $ref: '#/components/schemas/CarRequest'
   *          responses:
   *              "201":
   *                  description: Car successfully updated
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/Car'
   */
  route.put("/:id", controller.update);

  // DELETE
  /**
   * @swagger
   * /cars/{id}:
   *      delete:
   *          summary: Delete car data
   *          tags: [Car]
   *          security:
   *              -   bearerAuth: []
   *          parameters:
   *              -   in: path
   *                  name: id
   *                  schema:
   *                      type: integer
   *                  required: true
   *                  description: The car id
   *          responses:
   *              "204":
   *                  description: Car successfully deleted
   */
  route.delete("/:id", controller.delete);

  return route;
};
