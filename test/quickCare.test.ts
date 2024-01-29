import request from "supertest";
import app from "../src/app";

describe("POST /quickCare/orders", () => {
  it("should create a new order and return 201 status", async () => {
    const res = await request(app).post("/quickCare/orders").send({
      quickCareProduct: "product1",
      quickCareQuantity: 2,
      quickCareUserData: "user1",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("orderId");
  });
});
