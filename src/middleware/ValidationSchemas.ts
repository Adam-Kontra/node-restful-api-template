import { NextFunction, Response, Request } from 'express'
import Joi, { ObjectSchema } from 'joi'

import { IDummyDatabaseItem } from '@Models/DummyDadabaseItem'
import Logger from '@Logger'

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body)

      next()
    } catch (error) {
      Logger.error(error)
      return res.status(422).json({ error })
    }
  }
}

export const Schemas = {
  dummyDatabaseItem: {
    create: Joi.object<IDummyDatabaseItem>({
      name: Joi.string().required()
    })
  }
}
