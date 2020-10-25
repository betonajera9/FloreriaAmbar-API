import { RequestHandler } from 'express'
import Product from '../models/product'

const add: RequestHandler = async (req, res) => {
	try {
		const product = new Product({
			name: req.body.name,
			in_stock: req.body.in_stock,
			price: req.body.price,
			description: req.body.description,
		})

		await product.save()

		res.status(200).json({
			status: true,
			message: 'Added product',
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Error adding product',
			error,
		})
	}
}

const getOne: RequestHandler = async (req, res) => {
	try {
		console.log(req.params)
		const product = await Product.findById(req.params.ID)

		if (!product) {
			return res.status(404).json({
				status: false,
				message: 'Error getting product',
			})
		}

		return res.status(200).json({
			status: true,
			message: 'Product found',
			product,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Error getting product',
			error,
		})
	}
}

const deleted: RequestHandler = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.ID)

		if (!product) {
			return res.status(404).json({
				status: false,
				message: 'Error getting product',
			})
		}

		res.status(200).json({
			status: true,
			message: 'Deleted user',
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Failed to remove product',
			error,
		})
	}
}

export default {
	add,
	getOne,
	deleted,
}
