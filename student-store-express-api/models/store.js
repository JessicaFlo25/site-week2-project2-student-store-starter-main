let productObj = require('../data/db.json')

const getAllProducts = () => {
    return productObj
}

const getProductByID = (id) => {
    return productObj.products.find((product) => product.id === id)
}

// const addProduct = (product) => {
//     const newProduct = {}
// }

module.exports = {
    getAllProducts,
    getProductByID,
}