const express = require('express');
const route = require('./src/router/index.js');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Binar Cars Express API with Swagger",
      version: "0.1.0",
      description: "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Binar Car",
        url: "https://binarcar.netlify.app/",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}/api/`,
      },
    ],
  },
  apis: ["./src/router/car.js", "./src/router/user.js"],
};

const specs = swaggerJsDoc(options);

app.use('/api', route(express));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

