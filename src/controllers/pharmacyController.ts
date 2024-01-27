import { Request, Response } from "express";
import axios from "axios";

// Placeholder data storage for orders
const healthMartOrders: any[] = [];
const carePlusOrders: any[] = [];
const quickCareOrders: any[] = [];

const PHARMACY_API_BASE_URL =
  "http://pharmacy-mock-service-env.eba-xzj3bbnm.us-east-1.elasticbeanstalk.com";

export const getPharmacies = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${PHARMACY_API_BASE_URL}/pharmacy`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching pharmacies:", error);
    res.status(500).send("Internal Server Error");
  }
};

// HealthMart Controller
export const createHealthMartOrder = (req: Request, res: Response) => {
  try {
    // Placeholder logic for creating a HealthMart order
    const orderData = req.body;
    // Validate order data
    if (
      !orderData.healthMartProduct ||
      !orderData.healthMartQuantity ||
      !orderData.healthMartCustomerInfo
    ) {
      return res.status(400).json({
        error: "Invalid HealthMart order payload. Missing required fields.",
      });
    }
    // Implement actual logic to save the order to the database or in-memory storage
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
    // Placeholder logic for retrieving all HealthMart orders
    res.status(200).json(healthMartOrders);
  } catch (error) {
    console.error("Error retrieving HealthMart orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getHealthMartOrderById = (req: Request, res: Response) => {
  try {
    // Placeholder logic for retrieving a specific HealthMart order by ID
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

// Similar logic for CarePlus and QuickCare orders

// CarePlus Controller
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

// QuickCare Controller
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
