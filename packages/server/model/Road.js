const mongoose = require('mongoose');

const roadSchema = mongoose.Schema({
  title : { type:String, required : true },
  desc : String,
  created_at : { type : Date, default : Date.now },
  update_at : { type : Date, default : Date.now }
})

const Road = module.exports = mongoose.model('Road',roadSchema)
