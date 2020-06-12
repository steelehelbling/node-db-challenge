const server = require('./postman/server')

const PORT = 9113;
server.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`)
})

