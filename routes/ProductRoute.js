import express from "express";
import { getProducts, getProductById, createProduct, deleteProduct, updateProduct} from '../controllers/ProductController.js'

const router = express.Router();

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)


export default router