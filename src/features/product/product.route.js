import express from 'express';
import ProductController from './product.controller';
const productcontroller=new ProductController();
const router=express.Router();

router.get('/',productcontroller.getallproduct);
router.post('/',productcontroller.addProduct);

export default router;