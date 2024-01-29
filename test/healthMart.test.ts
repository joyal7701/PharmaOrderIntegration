import request from "supertest";
import app from "../src/app";

describe("POST /healthMart/orders", () => {
  it("should create a new order and return 201 status", async () => {
    const res = await request(app).post("/healthMart/orders").send({
      healthMartProduct: "product1",
      healthMartQuantity: 2,
      healthMartCustomerInfo: "customer1",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("orderId");
  });
});
