const express = require('express');
const route = require('./router/index.js');
const formidableMiddleware = require("formidable");

const app = express();
const port = 8005;

app.use('/api', route(express));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// const express = require("express");
// const formidableMiddleware = require("formidable");

// const carRouter = require("./router/car.router.js");

// const PORT = 8005 || process.env.PORT;
// const app = express();

// app.use(carRouter);

// app.listen(PORT, () => {
//     console.log(`Application running at localhost: ${PORT}`);
// });