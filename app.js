const express = require('express')
const { userLogin } = require('./controllers/userController')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    console.log('Hello world ')
    res.json({ message: 'Hello World' })
})

app.get('/login', userLogin)

app.listen(port, (err) => {
        if (err) {
            console.log('Error in starting server')
            console.log('err :>> ', err);
        } else {
            console.log(`Server is running at port ${port}`)
        }
}) 