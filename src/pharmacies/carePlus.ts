import { Request, Response } from "express";
import { Pharmacy } from "./pharmacy";

const carePlusOrders: any[] = [];

export class CarePlus extends Pharmacy {
  static clearOrders() {
    carePlusOrders.length = 0;
  }

  createOrder(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      const orderData = req.body;

      if (
        !orderData.carePlusProduct ||
        !orderData.carePlusQuantity ||
        !orderData.carePlusClientInfo
      ) {
        return res.status(400).json({
          error: "Invalid CarePlus order payload. Missing required fields.",
        });
      }

      const newOrder = { orderId: carePlusOrders.length + 1, ...orderData };
      carePlusOrders.push(newOrder);
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating CarePlus order:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  getOrders(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      return res.status(200).json(carePlusOrders);
    } catch (error) {
      console.error("Error retrieving CarePlus orders:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  getOrderById(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> {
    try {
      const orderId = req.params.orderId;
      const order = carePlusOrders.find((o) => o.orderId === Number(orderId));

      if (!order) {
        return res.status(404).json({ error: "CarePlus order not found" });
      }
      return res.status(200).json(order);
    } catch (error) {
      console.error("Error retrieving CarePlus order by ID:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
