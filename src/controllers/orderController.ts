// import { Request, Response } from "express";
// import { Order, OrderPayload } from "../models/orderModels";

// // Placeholder data storage for orders
// const orders: Order[] = [];

// export const createOrder = (req: Request, res: Response) => {
//   try {
//     const orderPayload: OrderPayload = req.body;

//     // Basic validation
//     if (!orderPayload.healthMartProduct || !orderPayload.healthMartQuantity) {
//       return res
//         .status(400)
//         .json({ error: "Invalid order payload. Missing required fields." });
//     }

//     // Additional validation based on business rules
//     if (orderPayload.healthMartQuantity <= 0) {
//       return res
//         .status(400)
//         .json({ error: "Quantity should be greater than 0." });
//     }

//     // Implement logic to create the order
//     const newOrder: Order = { id: orders.length + 1, payload: orderPayload };
//     orders.push(newOrder);

//     res.status(201).json(newOrder);
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export const getOrders = (req: Request, res: Response) => {
//   try {
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error("Error retrieving orders:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
