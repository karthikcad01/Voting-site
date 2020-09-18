const Express = require("express")
const setupMiddleware = require('./setup/middleware')
const setupDatabase = require('./setup/database')
const setupRouter = require('./setup/router')

const app = Express()

setupMiddleware(app)

setupDatabase()
.then((client) => {

    setupRouter(app,client)


    app.listen(4000, () => {
        console.log('Server started at port 4000');
    })
})
.catch(console.error)

