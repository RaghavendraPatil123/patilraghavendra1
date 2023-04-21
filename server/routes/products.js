import express from 'express';
import product from '../model/product.js'; 
 const router = express.Router();

 router.get('/products',async(req,res)=>{
    let products=await product.find()
    res.json(products)
 });

 router.post('/add-products', async (req,res)=>{
     const {name,price,description,category}=req.body
     const chandu= new product({
        name,
        price,
        description,
        category
     })
     const saveproduct = await chandu.save();

     res.status(200).send("products added sucessfully")
 });

 export default router;