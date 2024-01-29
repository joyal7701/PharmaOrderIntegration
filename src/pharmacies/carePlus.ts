import { Request, Response } from "express";
import { Pharmacy } from "./pharmacy";

// Array to store CarePlus orders
export const carePlusOrders: any[] = [];

export class CarePlus extends Pharmacy {
  /**
   * Creates a new order in the CarePlus pharmacy.
   * @param req - The request object containing the order data.
   * @param res - The response object to send the result.
   * @returns The response object with the created order or an error message.
   */
  createOrder(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      const orderData = req.body;

      // Check if required fields are present in the order payload
      if (
        !orderData.carePlusProduct ||
        !orderData.carePlusQuantity ||
        !orderData.carePlusClientInfo
      ) {
        return res.status(400).json({
          error: "Invalid CarePlus order payload. Missing required fields.",
        });
      }

      // Create each order with new orderId and provided orderData
      const newOrder = { orderId: carePlusOrders.length + 1, ...orderData };

      carePlusOrders.push(newOrder);

      return res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating CarePlus order:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  /**
   * Retrieves all the orders in the CarePlus pharmacy.
   * @param req - The request object.
   * @param res - The response object to send the result.
   * @returns The response object with the list of orders or an error message.
   */
  getOrders(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      return res.status(200).json(carePlusOrders);
    } catch (error) {
      console.error("Error retrieving CarePlus orders:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  /**
   * Retrieves a specific order by its ID in the CarePlus pharmacy.
   * @param req - The request object containing the order ID.
   * @param res - The response object to send the result.
   * @returns The response object with the order or an error message.
   */
  getOrderById(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> {
    try {
      const orderId = req.params.orderId;

      // Find the order in the array of CarePlus orders based on orderId
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
