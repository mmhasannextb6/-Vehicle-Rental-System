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


const getVehicles = async (req: Request, res: Response) => {
  try {
    const result = await vehicleServices.getVehiclesFromDb();
    res.status(201).send({
      success: true,
      message: "get vehicles successfully",
      data: result,
    });
  } catch (err: any) {
      res.status(500).send({
      success: false,
      message: "vehicle not  find",
      data: err.message,
    });
  }
};

const getSingleVehicle = async (req: Request, res: Response) => {
  const vehicleId = req.params.vehicleId
  console.log(vehicleId)
  try {
    const result = await vehicleServices.getSingleVehiclesFromDb(vehicleId!);
    res.status(201).send({
      success: true,
      message: "get single vehicle successfully",
      data: result,
    });
  } catch (err: any) {
      res.status(500).send({
      success: false,
      message: "vehicle not  find",
      data: err.message,
    });
  }
};


const updateVehicle = async (req: Request, res: Response) => {
  const vehicleId = req.params.vehicleId
  try {
    const result = await vehicleServices.updateAVehicleInDb(vehicleId!, req.body);
    res.status(201).send({
      success: true,
      message: "update vehicle successfully",
      data: result,
    });
  } catch (err: any) {
      res.status(500).send({
      success: false,
      message: "vehicle not  find",
      data: err.message,
    });
  }
};




export const vehicleControllers = {
  addVehicle,
  getVehicles,
  getSingleVehicle,
  updateVehicle
};
