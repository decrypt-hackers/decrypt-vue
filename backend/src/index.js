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

app.listen(APP_PORT, APP_HOST)