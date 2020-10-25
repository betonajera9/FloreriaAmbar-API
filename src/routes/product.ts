import { Router } from 'express'
import Product from '../controllers/product'

const router = Router()

router.get('/', (req, res) => {
	res.send('API al pedo')
})
router.post('/product/add', Product.add)
router.get('/product/getOne/:ID', Product.getOne)
router.delete('/product/delete/:ID', Product.deleted)

export default router
