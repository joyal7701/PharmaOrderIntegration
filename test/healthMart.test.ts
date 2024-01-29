import request from "supertest";
import app from "../src/app";
import { healthMartOrders } from "../src/pharmacies/healthMart";

describe("HealthMart API", () => {
  beforeEach(() => {
    // Clear the HealthMart orders array before each test
    healthMartOrders.length = 0;
  });

  describe("POST /healthMart/orders", () => {
    it("should create a new HealthMart order and return 201 status", async () => {
      const res = await request(app).post("/healthMart/orders").send({
        healthMartProduct: "product1",
        healthMartQuantity: 2,
        healthMartCustomerInfo: "customer1",
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("orderId");
    });

    it("should return 400 for invalid HealthMart order payload", async () => {
      const res = await request(app).post("/healthMart/orders").send({
        // Missing required fields
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("error");
    });
  });

  describe("GET /healthMart/orders", () => {
    it("should get all HealthMart orders and return 200 status", async () => {
      const res = await request(app).get("/healthMart/orders");
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("GET /healthMart/orders/:orderId", () => {
    it("should get a HealthMart order by ID and return 200 status", async () => {
      // Create a new order to get its ID
      const createOrderRes = await request(app)
        .post("/healthMart/orders")
        .send({
          healthMartProduct: "product1",
          healthMartQuantity: 2,
          healthMartCustomerInfo: "customer1",
        });

      const orderId = createOrderRes.body.orderId;

      // Retrieve the created order by ID
      const getOrderRes = await request(app).get(
        `/healthMart/orders/${orderId}`
      );
      expect(getOrderRes.statusCode).toEqual(200);
      expect(getOrderRes.body).toHaveProperty("orderId", orderId);
    });

    it("should return 404 for non-existent HealthMart order", async () => {
      const nonExistentOrderId = 999; // Assuming 999 is a non-existent order ID
      const res = await request(app).get(
        `/healthMart/orders/${nonExistentOrderId}`
      );
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty("error");
    });
  });
});
