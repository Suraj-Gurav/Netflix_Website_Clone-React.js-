const mongoose=require("./../database");
const bcrypt=require("bcrypt");

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phoneNo:{
        type:String,
        require:true,
        unique:true
    },
    emailID:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
      
    },
    confirmPassword:{
        type:String,
        require:true
    }
});

adminSchema.pre('save',function (next){
        var salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
        next();
    });

const admin =new mongoose.model("admin",adminSchema);

module.exports=admin;

// //middlewere function remove confirm password after save
// adminSchema.pre('save',()=>{
//     this.confirmPassword=undefined;
// });
// //password hashing for security purpose
// adminSchema.pre('save',async()=>{
//     const salt=await bcrypt.genSalt();
//     const hashString=await bcrypt.hash(this.password,salt);
//     this.password=hashString;
// });
