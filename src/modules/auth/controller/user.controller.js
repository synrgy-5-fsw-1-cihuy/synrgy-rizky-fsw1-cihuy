const formidableMiddleware = require("formidable");
const jwt = require("../../../utils/jwt.js");
const userService = require("../service/user.service.js");
const bcrypt = require("../../../utils/bcrypt.js");

const UserController = {
  registerMemberHandler: async (req, res) => {
    const form = formidableMiddleware({});

    try {
      form.parse(req, async (err, fields, files) => {
        if (
          fields.name == undefined ||
          fields.email == undefined ||
          fields.password == undefined
        ) {
          res.end("Data tidak lengkap");
          return;
        }

        const isUserExist = await userService.userByEmail(fields.email);

        if (isUserExist != null) {
          return res.status(422).json({
            message: "Email telah ada"
          });
        }

        const hashedPassword = await bcrypt.hash(fields.password);

        const userPayload = {
          name: fields.name,
          email: fields.email,
          password: hashedPassword,
          role: "member",
        };

        await userService.createUser(userPayload);

        return res.status(201).json({
          message: "User created!",
          data: {
            email: fields.email,
            role: "member",
          },
        });
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  addAdminHandler: async (req, res) => {
    const form = formidableMiddleware({});

    try {
      form.parse(req, async (err, fields, files) => {
        if (
          fields.name == undefined ||
          fields.email == undefined ||
          fields.password == undefined
        ) {
          res.end("Data not complete");
          return;
        }

        const isUserExist = await userService.userByEmail(fields.email);

        if (isUserExist != null) {
          throw "Admin existed";
        }

        const hashedPassword = await bcrypt.hash(fields.password);

        const userPayload = {
          name: fields.name,
          email: fields.email,
          password: hashedPassword,
          role: "admin",
        };

        await userService.createUser(userPayload);

        return res.status(201).json({
          message: "Admin created!",
          data: {
            email: fields.email,
            role: "admin",
          },
        });
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  loginHandler: async (req, res) => {
    const form = formidableMiddleware({});

    try {
      form.parse(req, async (err, fields, files) => {
        if (fields.email == undefined || fields.password == undefined) {
          res.end("Data not complete");
          return;
        }

        const checkUser = await userService.userByEmail(fields.email);

        if (checkUser == null) {
          res.status(401).json({ error: "User not found. Please register!" });
          return;
        }

        const checkPassword = await bcrypt.compare(
          fields.password,
          checkUser.password
        );

        if (!checkPassword) {
          res.status(401).json({ error: "Password Salah. Please try again!" });
          return;
        }

        const tokenGenerated = jwt.encodeTokenJwt({
          id: checkUser.id,
          email: checkUser.email,
          role: checkUser.role,
          name: checkUser.name,
        });

        return res.status(200).json({
          message: "Login Sukses!",
          data: {
            token: tokenGenerated,
            email: checkUser.email,
            role: checkUser.role,
            name: checkUser.name,
          },
        });
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  getProfileHandler: async (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decodedToken = await jwt.checkTokenJwt(token);
    const getUserById = await userService.userById(decodedToken.id);

    if (getUserById == null) {
      return res.status(404).json({ error: "User Tidak Ditemukan" });
    }

    res.status(200).json({
      data: {
        id: getUserById.id,
        email: getUserById.email,
        role: getUserById.role,
        createdAt: getUserById.createdAt,
        updatedAt: getUserById.updatedAt,
      },
    });
  },
};

module.exports = UserController;
