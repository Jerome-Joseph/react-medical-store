const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory')
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


//ROUTE 1 : Fetch inventory /api/inventory/fetch_inventory
router.get('/fetch_inventory',fetchuser, async (req,res)=>{
    try {
        const inventory = await Inventory.find({user:req.user.id})
        res.json(inventory)   
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error has been occured");
    }
})

// ROUTE 2: Add a new Note using: POST /api/inventory/addinventory. Login required
router.post('/addinventory',fetchuser,[
    body('medicine_name','Enter a valid title').isLength({ min: 1 }),
    body('manufacturer',"Enter a valid manufacturer").isLength({ min: 1 }),
    body('price',"Enter a valid price").isLength({ min: 1 }),
    body('stock',"Enter a valid stock").isLength({ min: 1 }),
    body('discount',"Enter a valid discount").isLength({ min: 1 })
], async (req,res)=>{

    try {
    const {medicine_name ,manufacturer, price, stock, discount} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// creating new note and saving it
    const inventory = new Inventory({
        medicine_name ,manufacturer, price, stock, discount, user:req.user.id
    })
    const savedInventory = await inventory.save();

    res.json(savedInventory)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some error has been occured"); 
}

})

// ROUTE 3: Updating a Note using: PUT "/api/inventory/updateinventory". Login required
router.put('/updateinventory/:id',fetchuser, async (req,res)=>{
    const {medicine_name ,manufacturer, price, stock, discount} = req.body;

    //  Create a newNote object
    const newInventory = {};
    if(medicine_name){newInventory.medicine_name = medicine_name};
    if(manufacturer){newInventory.manufacturer = manufacturer};
    if(price){newInventory.price = price};
    if(stock){newInventory.stock = stock};
    if(discount){newInventory.discount = discount};

    // Find the note to be updated and update it
    let inventory = await Inventory.findById(req.params.id);
    if(!inventory){res.status(404).send("Not found")}

    // if(inventory.user.toString() !== req.user.id){
    //     res.status(401).send("Not allowed")
    // }

    inventory = await Inventory.findByIdAndUpdate(req.params.id,{$set: newInventory}, {new:true})
    res.json({inventory});
})

// ROUTE 4: Deleting a Note using: DELETE "/api/inventory/deleteinventory". Login required
router.delete('/deleteinventory/:id',fetchuser, async (req,res)=>{
   
    // Find the note to be updated and update it
    let inventory = await Inventory.findById(req.params.id);
    if(!inventory){res.status(404).send("Not found")}

    // if(inventory.user.toString() !== req.user.id){
    //     res.status(401).send("Not allowed")
    // }

    inventory = await Inventory.findByIdAndDelete(req.params.id)
    res.json({"Success":"Inventory has been deleted", inventory:inventory});
})

module.exports= router;