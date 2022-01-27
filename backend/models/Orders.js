const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
   medi_name:{
       type: String,
       required: true
   },
   qty:{
       type: String,
       required: true
   },
   cust_name:{
       type: Date,
       required: true
   },
   cust_number:{
       type: String,
       required: true
   }
  });

  module.exports = mongoose.model('order', OrderSchema)