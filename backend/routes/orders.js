const express = require('express');
const router = express.Router();
const Order = require('../models/Orders')
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Orders = require('../models/Orders');


//ROUTE 1 : Fetch inventory /api/orders/fetchorders
router.get('/fetchorders',fetchuser, async (req,res)=>{
    try {
        const order = await Orders.find({user:req.user.id})
        res.json(order)   
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error has been occured");
    }
})

// ROUTE 2: Add a new Note using: POST /api/orders/addorders. Login required
router.post('/addorders',fetchuser,[
    body('medi_name','Enter a valid title').isLength({ min: 1 }),
    body('qty',"Enter a valid manufacturer").isLength({ min: 1 }),
    body('cust_name',"Enter a valid price").isLength({ min: 1 }),
    body('cust_number',"Enter a valid stock").isLength({ min: 1 })
], async (req,res)=>{

    try {
    const {medi_name ,qty, cust_name, cust_number} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// creating new note and saving it
    const order = new Orders({
        medi_name ,qty, cust_name, cust_number, user:req.user.id
    })
    const savedOrders = await order.save();

    res.json(savedOrders)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some error has been occured"); 
}

})

// ROUTE 3: Updating a Note using: PUT " /api/orders/updateorders". Login required
router.put('/updateorders/:id',fetchuser, async (req,res)=>{
    const { medi_name ,qty, cust_name, cust_number} = req.body;

    //  Create a newNote object
    const newOrder = {};
    if(medi_name){newOrder.medi_name = medi_name};
    if(qty){newOrder.qty = qty};
    if(cust_name){newOrder.cust_name = cust_name};
    if(cust_number){newOrder.cust_number = cust_number};

    // Find the note to be updated and update it
    let order = await Orders.findById(req.params.id);
    if(!order){res.status(404).send("Not found")}

    // if(inventory.user.toString() !== req.user.id){
    //     res.status(401).send("Not allowed")
    // }

    order = await Orders.findByIdAndUpdate(req.params.id,{$set: newOrder}, {new:true})
    res.json({order});
})

// ROUTE 4: Deleting a Note using: DELETE "/api/orders/deleteorders". Login required
router.delete('/deleteorders/:id',fetchuser, async (req,res)=>{
   
    // Find the note to be updated and update it
    let order = await Orders.findById(req.params.id);
    if(!order){res.status(404).send("Not found")}

    // if(inventory.user.toString() !== req.user.id){
    //     res.status(401).send("Not allowed")
    // }

    order = await Orders.findByIdAndDelete(req.params.id)
    res.json({"Success":"Orders has been deleted", order:order});
})

module.exports= router;