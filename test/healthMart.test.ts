import request from "supertest";
import app from "../src/app";
import { healthMartOrders } from "../src/pharmacies/healthMart";

describe("HealthMart API", () => {
  beforeEach(() => {
    // Clear the HealthMart orders array before each test
    healthMartOrders.length = 0;
  });

  // Test suite for the POST /healthMart/orders endpoint.
  describe("POST /healthMart/orders", () => {
    // Test case to verify that a new HealthMart order can be created and returns a 201 status.
    it("should create a new HealthMart order and return 201 status", async () => {
      const res = await request(app).post("/healthMart/orders").send({
        healthMartProduct: "product1",
        healthMartQuantity: 2,
        healthMartCustomerInfo: "customer1",
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("orderId");
    });

    // Test case to verify that a 400 status is returned for an invalid HealthMart order payload.
    it("should return 400 for invalid HealthMart order payload", async () => {
      const res = await request(app).post("/healthMart/orders").send({
        // Missing required fields
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("error");
    });
  });

  // Test suite for the GET /healthMart/orders endpoint.
  describe("GET /healthMart/orders", () => {
    // Test case to verify that all HealthMart orders can be retrieved and returns a 200 status.
    it("should get all HealthMart orders and return 200 status", async () => {
      const res = await request(app).get("/healthMart/orders");
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  // Test suite for the GET /healthMart/orders/:orderId endpoint.
  describe("GET /healthMart/orders/:orderId", () => {
    // Test case to verify that a HealthMart order can be retrieved by ID and returns a 200 status.
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

    // Test case to verify that a 404 status is returned for a non-existent HealthMart order.
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
