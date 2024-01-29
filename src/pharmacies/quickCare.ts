import { Request, Response } from "express";
import { Pharmacy } from "./pharmacy";

// Array to store QuickCare orders
export const quickCareOrders: any[] = [];

export class QuickCare extends Pharmacy {
  /**
   * Creates a new order in the QuickCare pharmacy.
   * @param req - The request object containing the order data.
   * @param res - The response object to send the result.
   * @returns The response object with the created order or an error message.
   */
  createOrder(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      const orderData = req.body;

      // Check if required fields are present in the order payload
      if (
        !orderData.quickCareProduct ||
        !orderData.quickCareQuantity ||
        !orderData.quickCareUserData
      ) {
        return res.status(400).json({
          error: "Invalid QuickCare order payload. Missing required fields.",
        });
      }

      // Create each order with new orderId and provided orderData
      const newOrder = { orderId: quickCareOrders.length + 1, ...orderData };

      quickCareOrders.push(newOrder);

      return res.status(201).json(newOrder);
    } catch (error) {
      console.error("Error creating QuickCare order:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  /**
   * Retrieves all the orders in the QuickCare pharmacy.
   * @param req - The request object.
   * @param res - The response object to send the result.
   * @returns The response object with the list of orders or an error message.
   */
  getOrders(req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      return res.status(200).json(quickCareOrders);
    } catch (error) {
      console.error("Error retrieving QuickCare orders:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  /**
   * Retrieves a specific order by its ID in the QuickCare pharmacy.
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

      // Find the order in the array of QuickCare orders based on orderId
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
