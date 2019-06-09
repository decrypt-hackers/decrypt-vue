const express = require('express')
const bodyParser = require('body-parser')
const User = require('../models/user')

const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter
  .route('/')
  .get((req, res, next) => {
    User.find(req.body)
      .then(
        user => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.json(user)
        },
        err => next(err)
      )
      .catch(err => next(err))
  })
  .post((req, res, next) => {
    User.create(req.body)
      .then(
        user => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.json(user)
        },
        err => next(err)
      )
      .catch(err => next(err))
  })

userRouter
  .route('/:id')
  .get((req, res, next) => {
    User.findById(req.params.id)
      .then(
        user => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.json(user)
        },
        err => next(err)
      )
      .catch(err => next(err))
  })
  .put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then(
        user => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.json(user)
        },
        err => next(err)
      )
      .catch(err => next(err))
  })

module.exports = userRouter
