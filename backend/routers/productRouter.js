import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({}); //send list of products to frontend
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProduct = await Product.insertMany(data.products); //insert data to mongodb database
    res.send({ createdProduct });
  })
);

productRouter.get('/:id', expressAsyncHandler(async (req, res) => { //api for product details to send to the frontend
    const product = await Product.findById(req.params.id);
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Product Not Found'})
    }
}))

export default productRouter;
