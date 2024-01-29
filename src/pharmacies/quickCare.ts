import { Request, Response } from "express";
import { Pharmacy } from "./pharmacy";

const quickCareOrders: any[] = [];

export class QuickCare extends Pharmacy {
  static clearOrders() {
    quickCareOrders.length = 0;
  }

  createOrder(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      const orderData = req.body;

      if (
        !orderData.quickCareProduct ||
        !orderData.quickCareQuantity ||
        !orderData.quickCareUserData
      ) {
        return res.status(400).json({
          error: "Invalid QuickCare order payload. Missing required fields.",
        });
      }

      const newOrder = { orderId: quickCareOrders.length + 1, ...orderData };
      quickCareOrders.push(newOrder);
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating QuickCare order:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  getOrders(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      return res.status(200).json(quickCareOrders);
    } catch (error) {
      console.error("Error retrieving QuickCare orders:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  getOrderById(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> {
    try {
      const orderId = req.params.orderId;
      const order = quickCareOrders.find((o) => o.orderId === Number(orderId));

      if (!order) {
        return res.status(404).json({ error: "QuickCare order not found" });
      }
      return res.status(200).json(order);
    } catch (error) {
      console.error("Error retrieving QuickCare order by ID:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
