const  mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
    id:String,
    name:String,
    salary:String,
    contact:{
        contact1:String,
        contact2:String
    }
})

const EmpModel = mongoose.model('emps',EmpSchema);
module.exports = EmpModel;