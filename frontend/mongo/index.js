const express = require('express')
const consola = require('consola')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
// Import and Set Nuxt.js options

const queuedPostsRouter = require('./routers/queuedPostsRouter')

// Connect to Mongo
mongoose.connect('mongodb+srv://' + db_user + ':' 
    + db_pass + '@cluster0-c14lf.gcp.mongodb.net/Decrypt?retryWrites=true')
.then(() => {
    console.log('Connected to Server')
})
.catch((err) => console.log(err));


app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/queuedPosts', queuedPostsRouter)

app.listen('8080')
