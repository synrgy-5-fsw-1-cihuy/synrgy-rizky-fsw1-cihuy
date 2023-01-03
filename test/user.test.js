const request = require("supertest");
const app = require("../app");

describe("Test API Auth Endpoint", () => {
  describe("POST /v1/auth/register => User register", () => {
    it("should respond with a 201 status code", async () => {
      await request(app)
        .post("/v1/auth/register")
        .send({
          name: "Lenovo",
          email: "Lenov@gmail.com",
          password: "123456",
        })
        .expect(201);
    });
    it("should respond with a 500 status code", async () => {
      await request(app)
        .post("/v1/auth/register")
        .send({
          email: "Lenov@gmail.com",
          password: "123456",
        })
        .expect(500);
    });
  });

  describe("POST /v1/auth/login => User login", () => {
    it("should respond with a 401 status code", async () => {
      await request(app)
        .post("/v1/auth/login")
        .send({
          email: "Leno@gmail.com",
          password: "123456",
        })
        .expect(404);
    });
    it("should respond with a 201 status code", async () => {
      await request(app)
        .post("/v1/auth/login")
        .send({
          email: "Lenov@gmail.com",
          password: "123456",
        })
        .expect(201);
    });
  });
});
