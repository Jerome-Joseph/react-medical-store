const express = require('express');
const router = express.Router();
const Executives = require('../models/Executives')
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


//ROUTE 1 : Fetch inventory /api/executives/fetchexecutives
router.get('/fetchexecutives',fetchuser, async (req,res)=>{
    try {
        const executives = await Executives.find({user:req.user.id})
        res.json(executives)   
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error has been occured");
    }
})

// ROUTE 2: Add a new Note using: POST /api/executives/addexecutives. Login required
router.post('/addexecutives',fetchuser,[
    body('first_name','Enter a valid title').isLength({ min: 1 }),
    body('last_name',"Enter a valid manufacturer").isLength({ min: 1 }),
    body('dob',"Enter a valid price").isLength({ min: 1 }),
    body('gender',"Enter a valid stock").isLength({ min: 1 }),
    body('exp',"Enter a valid discount").isLength({ min: 1 })
], async (req,res)=>{

    try {
    const {first_name ,last_name, dob, gender, exp} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// creating new note and saving it
    const executives = new Executives({
        first_name ,last_name, dob, gender, exp, user:req.user.id
    })
    const savedExecutives = await executives.save();

    res.json(savedExecutives)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some error has been occured"); 
}

})

// ROUTE 3: Updating a Note using: PUT "/api/executives/update_executives". Login required
router.put('/update_executives/:id',fetchuser, async (req,res)=>{
    const { first_name ,last_name, dob, gender, exp} = req.body;

    //  Create a newNote object
    const newExecutives = {};
    if(first_name){newExecutives.first_name = first_name};
    if(last_name){newExecutives.last_name = last_name};
    if(dob){newExecutives.dob = dob};
    if(gender){newExecutives.gender = gender};
    if(exp){newExecutives.exp = exp};

    // Find the note to be updated and update it
    let executives = await Executives.findById(req.params.id);
    if(!executives){res.status(404).send("Not found")}

    // if(inventory.user.toString() !== req.user.id){
    //     res.status(401).send("Not allowed")
    // }

    executives = await Executives.findByIdAndUpdate(req.params.id,{$set: newExecutives}, {new:true})
    res.json({executives});
})

// ROUTE 4: Deleting a Note using: DELETE "/api/executives/delete_executives". Login required
router.delete('/delete_executives/:id',fetchuser, async (req,res)=>{
   
    // Find the note to be updated and update it
    let executives = await Executives.findById(req.params.id);
    if(!executives){res.status(404).send("Not found")}

    // if(inventory.user.toString() !== req.user.id){
    //     res.status(401).send("Not allowed")
    // }

    executives = await Executives.findByIdAndDelete(req.params.id)
    res.json({"Success":"Executives has been deleted", executives:executives});
})

module.exports= router;