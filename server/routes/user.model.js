var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LoginSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:String
});



module.exports = mongoose.model('loggers',LoginSchema);