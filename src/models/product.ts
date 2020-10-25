import { Schema, model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const Product: Schema = new Schema({
	name: { type: String, requires: true },
	in_stock: { type: Number, requires: true },
	price: { type: Number, requires: true },
	description: { type: String },
})

Product.plugin(uniqueValidator)

export default model('Product', Product)
