const request = require("supertest");
const app = require("../src/app");

describe("Test root", () => {
  test("It should respond to a GET", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello there");
  });

  test("It should 404 on a non-existent path", async () => {
    const response = await request(app).get("/bueller");
    expect(response.statusCode).toBe(404);
  });

  test("It should not respond to a POST", async () => {
    const response = await request(app).post("/");
    expect(response.statusCode).toBe(404);
  });  
});