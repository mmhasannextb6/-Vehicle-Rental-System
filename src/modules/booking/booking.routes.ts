import express from 'express'
import { bookingcontroller } from './booking.controller'

const router = express.Router()

router.post('/bookings', bookingcontroller.createBooking)
router.get('/bookings', bookingcontroller.createBooking)
router.put('/bookings/:bookingId', bookingcontroller.createBooking)

export const bookingRouter = router