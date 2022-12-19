import express from 'express'
import { ValidateSchema, Schemas } from '@Middleware/ValidationSchemas'
import DummyDatabaseItemController from '@Controllers/DummyDatabaseItemController'

const router = express.Router()

router.get('/', DummyDatabaseItemController.index)
router.post('/create', ValidateSchema(Schemas.dummyDatabaseItem.create), DummyDatabaseItemController.create)

export = router
