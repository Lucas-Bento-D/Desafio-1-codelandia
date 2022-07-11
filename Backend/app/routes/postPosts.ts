import { Application } from "express"

const methods = require('../../models/all')

module.exports = (app: Application) => {
    app.post('/postposts', methods.postPosts)
}