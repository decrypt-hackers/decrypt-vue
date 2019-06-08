let express = require('express')
let bodyParser = require('body-parser')
let queuedPosts = require('../models/queuedPost')

const queuedPostsRouter = express.Router()

queuedPostsRouter.use(bodyParser.json())

queuedPostsRouter.route('/')
.get((req, res, next) => {
    queuedPosts.find({})
    .then((queuedPost) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(queuedPost)
    }, (err) => next(err))
    .catch((err) => next(err))
})
.post((req, res, next) => {
    queuedPosts.create(req.body)
    .then((queuedPost) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(queuedPost)
    }, (err) => next(err))
    .catch((err) => next(err))
})
.delete((req, res, next) => {
    queuedPosts.remove({})
      .then(
        queuedPost => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(queuedPost)
        },
        err => next(err)
      )
    .catch((err) => next(err))
});

queuedPostsRouter.route('/:id')
.get((req, res, next) => {
    queuedPosts.findById(req.params.id)
    .then((queuedPost) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(queuedPost)
    }, (err) => next(err))
    .catch((err) => next(err))
})
.put((req, res, next) => {
    queuedPosts.findByIdAndUpdate(req.params.id, req.body)
    .then((queuedPost) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(queuedPost)
    }, (err) => next(err))
    .catch((err) => next(err))
})
.delete((req, res, next) => {
    queuedPosts.findByIdAndDelete(req.params.id)
    .then((queuedPost) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(queuedPost);
    }, (err) => next(err))
    .catch((err) => next(err))
});

module.exports = queuedPostsRouter
