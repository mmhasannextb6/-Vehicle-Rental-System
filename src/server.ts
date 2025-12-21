

import { app } from "./app"
import { configEnv } from "./config/config"
app.listen(configEnv.port, () => {
  console.log(`Example app listening on port ${configEnv.port}`)
})
