const mongoose = require('mongoose');
const { Schema } = mongoose;

const InventorySchema = new Schema({
   medicine_name:{
       type: String,
       required: true
   },
   manufacturer:{
       type: String,
       required: true
   },
   price:{
       type: String,
       required: true
   },
   stock:{
       type: String,
       required: true
   },
   discount:{
       type: String,
       required: true
   }
  });

  module.exports = mongoose.model('inventory', InventorySchema)