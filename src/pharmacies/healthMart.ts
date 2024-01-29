import { Request, Response } from "express";
import { Pharmacy } from "./pharmacy";

export const healthMartOrders: any[] = [];

export class HealthMart extends Pharmacy {
  static clearOrders() {
    healthMartOrders.length = 0;
  }

  createOrder(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      const orderData = req.body;

      if (
        !orderData.healthMartProduct ||
        !orderData.healthMartQuantity ||
        !orderData.healthMartCustomerInfo
      ) {
        return res.status(400).json({
          error: "Invalid HealthMart order payload. Missing required fields.",
        });
      }

      const newOrder = { orderId: healthMartOrders.length + 1, ...orderData };
      healthMartOrders.push(newOrder);
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating HealthMart order:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  getOrders(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      return res.status(200).json(healthMartOrders);
    } catch (error) {
      console.error("Error retrieving HealthMart orders:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  getOrderById(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> {
    try {
      const orderId = req.params.orderId;
      const order = healthMartOrders.find((o) => o.orderId === Number(orderId));

      if (!order) {
        return res.status(404).json({ error: "HealthMart order not found" });
      }
      return res.status(200).json(order);
    } catch (error) {
      console.error("Error retrieving HealthMart order by ID:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
