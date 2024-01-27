// import { Request, Response } from "express";
// import { Order, OrderPayload } from "../models/orderModels";

// const orders: Order[] = [];

// export const createOrder = (req: Request, res: Response) => {
//   try {
//     const orderPayload: OrderPayload = req.body;

//     // Basic validation
//     if (!orderPayload.healthMartProduct || !orderPayload.healthMartQuantity) {
//       res
//         .status(400)
//         .json({ error: "Invalid order payload. Missing required fields." });
//       return;
//     }

//     // Additional validation based on business rules
//     if (orderPayload.healthMartQuantity <= 0) {
//       res.status(400).json({ error: "Quantity should be greater than 0." });
//       return;
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
//   res.status(200).json(orders);
// };
