const express = require("express")
const bodyParser = require("body-parser")
const Memcached = require("memcached")
// const keccak = require('keccak')
// const axios = require('axios')

const APP_HOST = '0.0.0.0'
const APP_PORT = 5650
const DB_HOST = 'localhost'
const DB_PORT = 5652
const INNER_API_HOST = 'localhost'
const INNER_API_PORT = 5651

const OPERATOR_ADDRESS = 'b8e6493bf64cae685095b162c4a4ee0645cde586'

const DEFAULT_GARI = 10000

const app = express()
const memcached = new Memcached(`${DB_HOST}:${DB_PORT}`)

app.use(bodyParser())

app.get('/api/hello', async (req, res) => {
  res.send('Hello, world!')
})

function getMessage () {
  return new Promise((resolve, reject) => {
    memcached.get('message', (err, result) => {
      if (err) return reject(err)
      if (typeof result === 'string') return resolve(result)
      resolve('')
    })
  })
}

function getPost (hash) {
  return new Promise((resolve, reject) => {
    memcached.get(`post:${hash}`, (err, result) => {
      if (err) return reject(err)
      if (typeof result === 'object') return resolve(result)
      resolve([])
    })
  })
}

app.get('/api/message', async (req, res) => {
  const message = await getMessage()
  res.send(message)
})

app.post('/api/message', async (req, res) => {
  const { message } = req.body

  memcached.set('message', message, 0, (err) => {
    if (err) {
      res.status(400).send(err)
    }
    else {
      res.sendStatus(200)
    }
  })
})

app.get('/api/post', async (req, res) => {
  const { hash } = req.query
  const post = await getPost(hash)
  res.send(post)
})

app.post('/api/post', async (req, res) => {
  const { post } = req.body
  const sender = req.header('uniqys-sender')
  const hash = post.hash
  const data = {
    reviewer: sender,
    post,
    hash
  }

  await new Promise((resolve, reject) => {
    memcached.set(`post:${hash}`, data, 0, (err) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

  res.send(data)
})

app.listen(APP_PORT, APP_HOST)