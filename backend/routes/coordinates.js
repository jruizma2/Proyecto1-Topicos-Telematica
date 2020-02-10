const express = require('express');
const router = express.Router();
const Coordinates = require('../models/coordinates.model');


// Get all the coordinates
router.get('/',async (req, res)=>{
    try{
        const coordinates = await Coordinates.find();
        res.json(coordinates);

    }catch(err){
        res.json({message:err});
    }
});

router.get('/:postId',async (req, res)=>{
    try{
        const coordinates = await Coordinates.findById(req.params.postId);
        res.json(coordinates);

    }catch(err){
        res.json({message:err});
    }
});

//Make a new entry on DB
router.post('/',async (req,res)=>{
    const coordinates = new Coordinates({
        lat: req.body.lat,
        lon: req.body.lon,
        user:req.body.user
    });
    try{
        const savedCoordinates = await coordinates.save()
        res.json(savedCoordinates);
    } catch(err){
        res.json({message:err});
    }
});

//Delete entry
router.delete('/:postId',async (req,res)=>{
try{
    const removedCoordinates = await Coordinates.remove({_id: req.params.postId});
    res.json(removedCoordinates);
}catch(err){
    res.json({message: err});
}
});

router.patch('/:postId',async (req,res)=>{
    try{
        const removedCoordinates = await Coordinates.updateOne(
            {_id: req.params.postId},
            {$set:{date:req.body.date}});
        res.json(removedCoordinates);
    }catch(err){
        res.json({message: err});
    }
    });
    



module.exports = router;