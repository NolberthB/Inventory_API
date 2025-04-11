import 'dotenv/config'
import { envs } from './configs/envs.js'

import app from './app.js'

import { databaseConnection } from './configs/db.js'


const startServer = async () => {
    await databaseConnection()

    app.listen(envs.port, () => console.log(`Server running on port: ${envs.port}`))
}
startServer()
  
    
