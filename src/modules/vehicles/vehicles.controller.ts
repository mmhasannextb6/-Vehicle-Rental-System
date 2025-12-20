import { Request, Response } from "express";
import { vehicleServices } from "./vehicles.services";

const addVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.addVehicleIntoDB(req.body);
    res.status(201).send({
      success: true,
      message: "vehicle created successfully",
      data: result,
    });
  } catch (err: any) {
      res.status(500).send({
      success: true,
      message: "vehicle not inserted into db",
      data: err.message,
    });
  }
};

export const vehicleControllers = {
  addVehicle,
};
