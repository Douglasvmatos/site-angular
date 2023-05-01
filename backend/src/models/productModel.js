const connection = require('./connection');

const getAll = async () => {
    const [products] = await connection.execute('SELECT * FROM products');
    return products;
};

const getOneProduct = async (id) => {
    const [searchProduct] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return searchProduct
};

const createProduct = async (product) => {

    const { title, quantity, price } = product;
    const query = 'INSERT INTO products (title, quantity, price) VALUES (?, ?, ?)'
    const [createdProduct] = await connection.execute(query, [title, quantity, price]);

    return {insertId: createdProduct.insertId}
}

const deleteProduct = async (id) => {
    const removedProduct = await connection.execute('DELETE FROM products WHERE id = ?', [id]);
    return removedProduct
}

const updateProduct = async (id, product) => {
    const { title, quantity, price } = product;
    const query = 'UPDATE products SET title = ?, quantity = ?, price = ? WHERE ID = ?'
    const updatedProduct = await connection.execute(query, [title, quantity, price, id]);
    return updatedProduct
}

module.exports = {
    getAll,
    createProduct,
    deleteProduct,
    updateProduct,
    getOneProduct
}