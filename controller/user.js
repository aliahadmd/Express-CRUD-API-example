import User from "../models/User.js"


// create user
export const createUser= async (req, res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        req.status(201).json(savedUser);
    } catch(err){
        res.json({error:err});
    };
    
}


// get all users
export const getAllUsers= async(req, res)=>{
    try{
        const users =await User.find({});
        res.status(201).json(users);
    } catch(err){
        res.json({error:err});
    };
}


//get individual user by Id
export const getUser= async(req, res)=>{
    try{
        const user =await User.findById(req.params.userId);
        res.status(200).json(user);
    } catch(err){
        res.json({error:err});
    };
}

// Update individual user
export const updateUser= async(req, res)=>{
    try{
        const pUser =await User.findByIdAndUpdate(req.params.userId, req.body,{
            new:true
        });
        res.status(200).json(pUser);
    } catch(err){
        res.json({error:err});
    };
}

// Delete an individual user
export const deleteUser= async(req, res)=>{
    try{
        const dUser =await User.findByIdAndDelete(req.params.userId);
        res.status(200).json(dUser);
    } catch(err){
        res.json({error:err});
    };
}