import { Request, Response } from "express";
import axios from "axios";

export abstract class Pharmacy {
  abstract createOrder(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>>;
  abstract getOrders(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>>;
  abstract getOrderById(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>>;
}

export const pharmacies: Record<string, Pharmacy> = {
  healthMart: new (require("./healthMart").HealthMart)(),
  carePlus: new (require("./carePlus").CarePlus)(),
  quickCare: new (require("./quickCare").QuickCare)(),
};

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
