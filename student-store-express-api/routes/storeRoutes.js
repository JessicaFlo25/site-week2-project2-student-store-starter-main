const storeModel = require('../models/store')
const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    const storeProducts = storeModel.getAllProducts()
    res.json(storeProducts)
})

router.get('/:id',(req,res) => {
   const {id} = req.params
   const product = storeModel.getProductByID(parseInt(id))

   res.json(product)
})

// router.post('/', (req,res) => {
    
// })

module.exports = router