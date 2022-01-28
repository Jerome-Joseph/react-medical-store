const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExecutiveSchema = new Schema({
   first_name:{
       type: String,
       required: true
   },
   last_name:{
       type: String,
       required: true
   },
   dob:{
       type: String,
       required: true
   },
   gender:{
       type: String,
       required: true
   },
   exp:{
       type: String,
       required: true
   }
  });

  module.exports = mongoose.model('executive', ExecutiveSchema)