import express from "express";
import {
  getPharmacies,
  createHealthMartOrder,
  getHealthMartOrders,
  getHealthMartOrderById,
  createCarePlusOrder,
  getCarePlusOrders,
  getCarePlusOrderById,
  createQuickCareOrder,
  getQuickCareOrders,
  getQuickCareOrderById,
} from "../controllers/pharmacyController";

const router = express.Router();
// Pharmacy routes
router.get("/pharmacy", getPharmacies);

// HealthMart routes
router.post("/healthmart/orders", createHealthMartOrder);
router.get("/healthmart/orders", getHealthMartOrders);
router.get("/healthmart/orders/:orderId", getHealthMartOrderById);

// CarePlus routes
router.post("/careplus/orders", createCarePlusOrder);
router.get("/careplus/orders", getCarePlusOrders);
router.get("/careplus/orders/:orderId", getCarePlusOrderById);

// QuickCare routes
router.post("/quickcare/orders", createQuickCareOrder);
router.get("/quickcare/orders", getQuickCareOrders);
router.get("/quickcare/orders/:orderId", getQuickCareOrderById);

export default router;
