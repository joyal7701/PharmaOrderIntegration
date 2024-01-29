import request from "supertest";
import app from "../src/app";

describe("POST /carePlus/orders", () => {
  it("should create a new order and return 201 status", async () => {
    const res = await request(app).post("/carePlus/orders").send({
      carePlusProduct: "product1",
      carePlusQuantity: 2,
      carePlusClientInfo: "client1",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("orderId");
  });
});
