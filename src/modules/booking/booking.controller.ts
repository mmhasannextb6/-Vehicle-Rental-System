import { bookingServices } from "./booking.services"

const createBooking=async()=>{
const result = await bookingServices.createBookingIntoDb()
}

export const bookingcontroller ={
    createBooking
}