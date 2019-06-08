const express = require('express')
const consola = require('consola')
const mongoose = require('mongoose')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const queuedPostsRouter = require('./routers/queuedPostsRouter')

// Connect to Mongo
mongoose.connect('mongodb+srv://' + db_user + ':' 
    + db_pass + '@cluster0-c14lf.gcp.mongodb.net/test?retryWrites=true')
.then(() => {
    console.log('Connected to Server')
})
.catch((err) => console.log(err));

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  app.use('queuedposts', queuedPostsRouter)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
