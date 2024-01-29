import request from "supertest";
import app from "../src/app";
import { CarePlus } from "../src/pharmacies/carePlus";

describe("CarePlus API", () => {
  beforeEach(() => {
    // Clear the CarePlus orders array before each test
    CarePlus.clearOrders();
  });

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

    it("should return 400 for invalid order payload", async () => {
      const res = await request(app).post("/carePlus/orders").send({
        // Missing required fields
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("error");
    });
  });

  describe("GET /carePlus/orders", () => {
    it("should get all CarePlus orders and return 200 status", async () => {
      const res = await request(app).get("/carePlus/orders");
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("GET /carePlus/orders/:orderId", () => {
    it("should get a CarePlus order by ID and return 200 status", async () => {
      // Create a new order to get its ID
      const createOrderRes = await request(app).post("/carePlus/orders").send({
        carePlusProduct: "product1",
        carePlusQuantity: 2,
        carePlusClientInfo: "client1",
      });

      const orderId = createOrderRes.body.orderId;

      // Retrieve the created order by ID
      const getOrderRes = await request(app).get(`/carePlus/orders/${orderId}`);
      expect(getOrderRes.statusCode).toEqual(200);
      expect(getOrderRes.body).toHaveProperty("orderId", orderId);
    });

    it("should return 404 for non-existent CarePlus order", async () => {
      const nonExistentOrderId = 999; // Assuming 999 is a non-existent order ID
      const res = await request(app).get(
        `/carePlus/orders/${nonExistentOrderId}`
      );
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty("error");
    });
  });
});
