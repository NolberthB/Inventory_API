import express from 'express'

import 'dotenv/config'
import { envs } from './configs/envs.js'

const app = express()

app.get("/", (req, res) => {
    res.send({
        'message': 'Hello World! from new port'
    })
})

app.listen(envs.port, () => {
    console.log(`Server running on port: ${envs.port}`)
})

