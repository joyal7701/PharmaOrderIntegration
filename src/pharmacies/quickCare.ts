import { Request, Response } from "express";

const quickCareOrders: any[] = [];

export const createQuickCareOrder = (req: Request, res: Response) => {
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
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating QuickCare order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getQuickCareOrders = (req: Request, res: Response) => {
  try {
    res.status(200).json(quickCareOrders);
  } catch (error) {
    console.error("Error retrieving QuickCare orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getQuickCareOrderById = (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const order = quickCareOrders.find((o) => o.orderId === Number(orderId));
    if (!order) {
      return res.status(404).json({ error: "QuickCare order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving QuickCare order by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
