import mongoose from 'mongoose'
import DummyDadabaseItem from '@Models/DummyDadabaseItem'

export default class {
  static fetchAll = async () => {
    const dummyDatabaseItems = await DummyDadabaseItem.find()

    return dummyDatabaseItems
  }

  static create = async (name: string) => {
    const dummyDatabaseItem = new DummyDadabaseItem({
      _id: new mongoose.Types.ObjectId(),
      name
    })

    const item = await dummyDatabaseItem.save()

    return item
  }
}
