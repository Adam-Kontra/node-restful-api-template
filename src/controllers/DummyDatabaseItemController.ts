import { NextFunction, Request, Response } from 'express'
import DummyDatabaseItemService from '../services/DummyDatabaseItemService'

export default class {
  public static index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dummyDatabaseItems = await DummyDatabaseItemService.fetchAll()
      return res.status(200).json({ success: true, dummyDatabaseItems })
    } catch (error) {
      return res.status(500).json({ success: false, error })
    }
  }

  public static create = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body

    try {
      const dummyDatabaseItem = await DummyDatabaseItemService.create(name)
      return res.status(200).json({ success: true, dummyDatabaseItem })
    } catch (error) {
      return res.status(500).json({ success: false, error })
    }
  }
}
