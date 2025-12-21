import express from 'express'
import { vehicleControllers } from './vehicles.controller'

const router = express.Router()

//Add new vehicle with name, type, registration, daily rent price and availability status
//done
router.post('/vehicles', vehicleControllers.addVehicle)
//done
router.get('/vehicles', vehicleControllers.getVehicles)
//done
router.get('/vehicles/:vehicleId', vehicleControllers.getSingleVehicle)
//done
router.put('/vehicles/:vehicleId', vehicleControllers.updateVehicle)
//running
router.delete('/vehicles/:vehicleId', vehicleControllers.deleteaVehicle)

export const vehicleRouter = router