const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000
const products_routes = require('./routes/products')

app.get('/', (req, res) => {
    res.send("Hello i am Home")
})

// Middleware
app.use('/api/products', products_routes)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running Port ${PORT}`)
        })
    } catch (error) {

    }
}

start()