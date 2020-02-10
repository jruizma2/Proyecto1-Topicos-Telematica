const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


// Get all the users
router.get('/',async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);

    }catch(err){
        res.json({message:err});
    }
});

router.get('/:postId',async (req, res)=>{
    try{
        const users = await User.findById(req.params.postId);
        res.json(users);

    }catch(err){
        res.json({message:err});
    }
});

//Make a new entry on DB
router.post('/',async (req,res)=>{
    const users = new User({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    });
    try{
        const savedUser = await users.save()
        res.json(savedUser);
    } catch(err){
        res.json({message:err});
    }
});

//Delete entry
router.delete('/:postId',async (req,res)=>{
try{
    const removedUser = await User.remove({_id: req.params.postId});
    res.json(removedUser);
}catch(err){
    res.json({message: err});
}
});

//Update
router.patch('/:postId',async (req,res)=>{
    try{
        const removedUser = await User.updateOne(
            {_id: req.params.postId},
            {$set:{
                name:req.body.name,
                age:req.body.age,
                gender:req.body.gender}});
        res.json(removedUser);
    }catch(err){
        res.json({message: err});
    }
    });
    



module.exports = router;