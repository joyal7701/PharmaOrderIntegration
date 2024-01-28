import { Request, Response } from "express";

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
