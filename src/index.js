const app = require('./express')
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})