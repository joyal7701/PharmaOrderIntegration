import express from "express";
import { pharmacies } from "../pharmacies/pharmacy";
import { getPharmacies } from "../pharmacies/pharmacy";

const router = express.Router();

// Route handler for retrieving all pharmacies.
router.get("/pharmacy", getPharmacies);

// Dynamically generate routes for each pharmacy's orders.
for (const [pharmacyName, pharmacy] of Object.entries(pharmacies)) {
  router.post(`/${pharmacyName}/orders`, pharmacy.createOrder);

  router.get(`/${pharmacyName}/orders`, pharmacy.getOrders);

  router.get(`/${pharmacyName}/orders/:orderId`, pharmacy.getOrderById);
}

export default router;
