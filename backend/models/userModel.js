const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    roll:{
        type:String,
        default:"user"
    }

});

//bycrypt hashing
userSchema.pre("save",async function(next){
    this.password = await bcrypt.hashSync(this.password,10)
})

module.exports = mongoose.model("User",userSchema)