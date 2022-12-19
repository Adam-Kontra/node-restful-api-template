import http from 'http'
import express from 'express'
import 'module-alias/register'

import mongoose from 'mongoose'

import Logger from '@Logger'
import dummyDadabaseItemRoutes from '@Routes/DummyDatabaseItem'
import { config } from './config'

const router = express()

// Connect to mongoDb
mongoose
  .set('strictQuery', false)
  .connect(config.mongo.uri)
  .then(() => {
    Logger.success('Successfully connected to mongoDb')
    // Only start the server if connection to Mongo is secured
    startServer()
  })
  .catch((error) => {
    Logger.error('Unable to connected to mongoDb')
    Logger.error(error)
  })

const startServer = () => {
  router.use((req, res, next) => {
    // Log the request
    Logger.info(`Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`)

    res.on('finish', () => {
      // Log the response
      Logger.info(
        `Result -> METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      )
    })

    next()
  })

  // Body parser setup
  router.use(express.urlencoded({ extended: true }))
  router.use(express.json())

  // Origin and header allowances
  router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).json({})
    }

    next()
  })

  // Routes
  router.use('/dummy-database-item', dummyDadabaseItemRoutes)

  // Healthcheck
  router.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }))

  // Error handling
  router.use((req, res, next) => {
    const error = new Error('Not found')

    Logger.error(error)

    res.status(404).json({
      message: error.message
    })
  })

  http
    .createServer(router)
    .listen(config.server.port, () => Logger.success(`Server is running on port ${config.server.port}`))
}
