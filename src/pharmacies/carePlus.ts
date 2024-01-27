import { Request, Response } from "express";

const carePlusOrders: any[] = [];

export const createCarePlusOrder = (req: Request, res: Response) => {
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
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating CarePlus order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCarePlusOrders = (req: Request, res: Response) => {
  try {
    res.status(200).json(carePlusOrders);
  } catch (error) {
    console.error("Error retrieving CarePlus orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCarePlusOrderById = (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const order = carePlusOrders.find((o) => o.orderId === Number(orderId));
    if (!order) {
      return res.status(404).json({ error: "CarePlus order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving CarePlus order by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
