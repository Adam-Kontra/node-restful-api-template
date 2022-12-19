import dotenv from 'dotenv'

dotenv.config()

const MONGO_USERNAME = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017`

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVERPORT) : 7070

export const config = {
  mongo: {
    uri: MONGO_URI
  },
  server: {
    port: SERVER_PORT
  }
}
