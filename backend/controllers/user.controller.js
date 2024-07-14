const user=require('../models/users.model.js');

const getAllUsers= async (req,res)=>{
    try{
        const finduser= await user.find({});
        res.status(200).json(finduser);
        // console.log(finduser);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

const getParticularUser= async (req,res)=>{
    try{
        const {id}=req.params;
        const findParticularUser= await user.findById(id);
        if(!findParticularUser){
            res.status(404),json({error:"User Not Found"});
            return;
        }
        res.status(200).json(findParticularUser);
    }catch(error){
        res.status(404).json({error:error.message});
    }
}

const createNewUser= async (req,res)=>{
    try{
        const newuser= await user.create(req.body);
        res.status(200).json(req.body);
        // console.log(newuser);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

const updateUser= async (req,res)=>{
    try{
        const {id}=req.params;
        const updateParticularUser= await user.findByIdAndUpdate(id,req.body);
        if(!updateParticularUser){
            res.status(404).json({error:"User Not Found"});
            return;
        }
        const findParticularUser= await user.findById(id);
        res.status(200).json(findParticularUser);

    }catch(error){
        res.status(500).json({error:error.message});
    }
};

const deleteUser= async (req,res)=>{
    try{
        const {id}=req.params;
        const updateParticularUser= await user.findByIdAndDelete(id);

        if(!updateParticularUser){
            res.status(404).json({error:"User Not Found"});
            return;
        }
        res.status(200).json({message:"User Deleted Successfully"});

    }catch(error){
        res.status(500).json({error:error.message});
    }
};

module.exports={
    getAllUsers,getParticularUser,createNewUser,updateUser,deleteUser
};