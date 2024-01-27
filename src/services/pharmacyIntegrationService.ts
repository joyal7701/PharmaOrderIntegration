// import axios from "axios";
// import { Request, Response } from "express";
// import { Pharmacy } from "../models/pharmacyModels";

// const PHARMACY_API_BASE_URL =
//   "http://pharmacy-mock-service-env.eba-xzj3bbnm.us-east-1.elasticbeanstalk.com";

// export const getPharmacies = async (req: Request, res: Response) => {
//   try {
//     const response = await axios.get<Pharmacy[]>(
//       `${PHARMACY_API_BASE_URL}/pharmacy`
//     );
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error("Error fetching pharmacies:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };
