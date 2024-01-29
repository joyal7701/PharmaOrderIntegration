import request from "supertest";
import app from "../src/app";
import { QuickCare } from "../src/pharmacies/quickCare";

describe("QuickCare API", () => {
  beforeEach(() => {
    // Clear the QuickCare orders array before each test
    QuickCare.clearOrders();
  });

  describe("POST /quickCare/orders", () => {
    it("should create a new QuickCare order and return 201 status", async () => {
      const res = await request(app).post("/quickCare/orders").send({
        quickCareProduct: "product1",
        quickCareQuantity: 2,
        quickCareUserData: "user1",
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("orderId");
    });

    it("should return 400 for invalid QuickCare order payload", async () => {
      const res = await request(app).post("/quickCare/orders").send({
        // Missing required fields
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("error");
    });
  });

  describe("GET /quickCare/orders", () => {
    it("should get all QuickCare orders and return 200 status", async () => {
      const res = await request(app).get("/quickCare/orders");
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("GET /quickCare/orders/:orderId", () => {
    it("should get a QuickCare order by ID and return 200 status", async () => {
      // Create a new order to get its ID
      const createOrderRes = await request(app).post("/quickCare/orders").send({
        quickCareProduct: "product1",
        quickCareQuantity: 2,
        quickCareUserData: "user1",
      });

      const orderId = createOrderRes.body.orderId;

      // Retrieve the created order by ID
      const getOrderRes = await request(app).get(
        `/quickCare/orders/${orderId}`
      );
      expect(getOrderRes.statusCode).toEqual(200);
      expect(getOrderRes.body).toHaveProperty("orderId", orderId);
    });

    it("should return 404 for non-existent QuickCare order", async () => {
      const nonExistentOrderId = 999; // Assuming 999 is a non-existent order ID
      const res = await request(app).get(
        `/quickCare/orders/${nonExistentOrderId}`
      );
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty("error");
    });
  });
});
