import { Request, Response } from "express";

const healthMartOrders: any[] = [];

export const createHealthMartOrder = (req: Request, res: Response) => {
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
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating HealthMart order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getHealthMartOrders = (req: Request, res: Response) => {
  try {
    res.status(200).json(healthMartOrders);
  } catch (error) {
    console.error("Error retrieving HealthMart orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getHealthMartOrderById = (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const order = healthMartOrders.find((o) => o.orderId === Number(orderId));

    if (!order) {
      return res.status(404).json({ error: "HealthMart order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving HealthMart order by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
