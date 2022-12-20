const userController = require("../modules/auth/controller/user.controller.js");
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
   *          User:
   *              type: object
   *              required:
   *                  - id
   *                  - name
   *                  - email
   *                  - password
   *                  - role
   *              properties:
   *                  id:
   *                      type: integer
   *                      description: Auto-generated id of the User
   *                  name:
   *                      type: string
   *                      description: The name of the User
   *                  email:
   *                      type: string
   *                      description: The email of the User
   *                  password:
   *                      type: string
   *                      description: The password of the User
   *                  role:
   *                      type: string
   *                      description: The Role of the User
   *                  createdAt:
   *                      type: timestamp
   *                      description: The date the data was created
   *                  updatedAt:
   *                      type: timestamp
   *                      description: The date the data was updated
   */

  /**
   * @swagger
   * components:
   *      schemas:
   *          UserRequest:
   *              type: object
   *              required:
   *                  - name
   *                  - email
   *                  - password
   *              properties:
   *                  name:
   *                      type: string
   *                      description: The name of the User
   *                  email:
   *                      type: string
   *                      description: The email of the User
   *                  password:
   *                      type: string
   *                      description: The password of the User
   */

  /**
   * @swagger
   * components:
   *      schemas:
   *          LoginRequest:
   *              type: object
   *              required:
   *                  - email
   *                  - password
   *              properties:
   *                  email:
   *                      type: string
   *                      description: The email of the User
   *                  password:
   *                      type: string
   *                      description: The password of the User
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

  // Register Member
  /**
   * @swagger
   * /users/register:
   *      post:
   *          summary: Register new member
   *          tags: [User]
   *          requestBody:
   *              description: Input for new member
   *              required: true
   *              content:
   *                  multipart/form-data:
   *                      schema:
   *                          $ref: '#/components/schemas/UserRequest'
   *          responses:
   *              "201":
   *                  description: User successfully registered
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/User'
   */
  route.post("/register", userController.registerMemberHandler);

  // Add Admin
  /**
   * @swagger
   * /users/add/admin:
   *      post:
   *          summary: Add new admin
   *          tags: [User]
   *          security:
   *              -   bearerAuth: []
   *          requestBody:
   *              description: Input for new admin, add new admin must be by superadmin.
   *              required: true
   *              content:
   *                  multipart/form-data:
   *                      schema:
   *                          $ref: '#/components/schemas/UserRequest'
   *          responses:
   *              "201":
   *                  description: User successfully registered
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/User'
   */
  route.post("/add/admin", authMiddleware, userController.addAdminHandler);

  // Login
  /**
   * @swagger
   * /users/login:
   *      post:
   *          summary: Login for user
   *          tags: [User]
   *          requestBody:
   *              description: Input for login
   *              required: true
   *              content:
   *                  multipart/form-data:
   *                      schema:
   *                          $ref: '#/components/schemas/LoginRequest'
   *          responses:
   *              "200":
   *                  description: Logged successfully
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/User'
   */
  route.post("/login", userController.loginHandler);

  // Current User
  /**
   * @swagger
   * /users/profile:
   *      post:
   *          summary: Check current user
   *          tags: [User]
   *          security:
   *              -   bearerAuth: []
   *          responses:
   *              "200":
   *                  description: Current User
   *                  content:
   *                      application/json:
   *                          schema:
   *                              $ref: '#/components/schemas/User'
   */
  route.post("/profile", userController.getProfileHandler);

  return route;
};
