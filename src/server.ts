import express from 'express'
import { authRouter } from './modules/authentication/auth.route'
import { vehicleRouter } from './modules/vehicles/vehicles.router'
import { userRouter } from './modules/users/user.route'
import { bookingRouter } from './modules/booking/booking.routes'
import { configEnv } from './config/config'
import { initDB } from './db/initDb'
const app = express()


initDB()
app.use(express.json())
//route
app.use('/api/v1', userRouter )
app.use('/api/v1', authRouter)
app.use('/api/v1', vehicleRouter )
app.use('/api/v1', bookingRouter)

app.listen(configEnv.port, () => {
  console.log(`Example app listening on port ${configEnv.port}`)
})
