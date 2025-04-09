//Server entry point

import 'dotenv/config'
import { envs } from './configs/envs.js'

import app from './app.js'


app.listen(envs.port, () => {
    console.log(`Server running on port: ${envs.port}`)
})

