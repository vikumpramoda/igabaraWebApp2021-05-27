const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    packageno:{type:String, require:true},
    description:{type:String, require:true},
    packageprice:{type : Number, require:true},
    date:{type:Date,require:true},
},

{
    timestamps:true,
});

const Package = mongoose.model('Package',packageSchema);

module.exports=Package;