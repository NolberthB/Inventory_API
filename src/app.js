import express from 'express'
const app = express()
import productsRoutes from './routes/productRoutes.js'

// Middleware
app.use(express.json())

// Routes
app.use('/api/products', productsRoutes)

app.get("/", (req, res) => {
    res.send({
        'message': 'Hello World! from new port'
    })
})

export default app