const productModel = require('../models/productModel')

const getAll = async (_req, res) => {
    const products = await productModel.getAll()
    return res.status(200).json(products)
};

const getOneProduct = async (req, res) => {
    const { id } = req.params;

    const product = await productModel.getOneProduct(id)
    return res.status(200).json(product)
} 

const createProduct = async (req, res) => {
    const createdProduct = await productModel.createProduct(req.body)
    return res.status(201).json(createdProduct)
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    await productModel.deleteProduct(id)
    return res.status(204).json()
} 

const updateProduct = async (req, res) => {
    const { id } = req.params;

    await productModel.updateProduct(id, req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct,
    getOneProduct
}