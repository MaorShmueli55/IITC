const request = require('supertest');
const app = require('../server.js'); // Adjust this path to point to your Express app

describe("GET /VPD/:add and /ANP", () => {
    it("/VPD/:add should respond with status code 200", async () => {
      const response = await request(app).get("/addProduct/update?title=nnn&price=1&description=jjj?image=mmmm?category=hhh");
      expect(response.statusCode).toBe(200);
    });
    it("GET /ANP should respond with status code 200", async () => {
      const response = await request(app).get("/task1");
      expect(response.statusCode).toBe(200);
    });
    it("GET /ANP should respond with status code 200", async () => {
        const response = await request(app).get("/task1/:1");
        expect(response.statusCode).toBe(200);
      });
      it("GET /ANP should respond with status code 200", async () => {
        const response = await request(app).get("/getCart/:1");
        expect(response.statusCode).toBe(200);
      });
      it("GET /ANP should respond with status code 200", async () => {
        const response = await request(app).get("/carts/7/update?userId=3&productId=1&quantity=4");
        expect(response.statusCode).toBe(200);
      });
  });
