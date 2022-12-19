import mongoose, { Document, Schema } from 'mongoose'

export interface IDummyDatabaseItem {
  name: string
}

export interface IDummyDatabaseItemModel extends IDummyDatabaseItem, Document {}

const DummyDatabaseModelSchema: Schema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    versionKey: false
  }
)

export default mongoose.model<IDummyDatabaseItemModel>('DummyDatabaseModel', DummyDatabaseModelSchema)
