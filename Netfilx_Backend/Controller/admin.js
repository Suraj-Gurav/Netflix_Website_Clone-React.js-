const adminModel=require("./../Model/admin");

exports.adminLogin = async (req,res)=>{
    const data = await new adminModel(req.body).save();
    res.json(data);
};

exports.getAdminData = async (req,res)=>{
    try{
        const data = await adminModel.find();
        res.json(data);
    }catch(err){
        res.json(err);
    }
};


exports.updateAdmin = (req,res)=>{
    adminModel.findByIdAndUpdate({_id:req.params.userId},req.body,{new:true},(err,data)=>{
        if(err){
            res.json(err);
        }else{
            res.json({
                "massege":"Data update Successfully",
                data:data
            });
        }
    }); 
};

exports.deleteAdmin = (req,res)=>{
    adminModel.findByIdAndDelete({_id:req.params.userId},(err,data)=>{
        if(err){
            res.json(err);
        }else{
            res.json({
                "massege":"Data delete Successfully",
                data:data
            });
        }
    }); 
};
