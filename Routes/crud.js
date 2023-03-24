const express = require("express")
const router = express.Router()
const Sample = require("../models/sample")

router.post("/POST/v1/events", async(req, res)=>{
    
    try {
        const data = await Sample.create(req.body)
        res.status(201).json({
            data
        })
        
    } catch (error) {
        res.status(400).json({
            message:"Please fill all fields"
        })
    }
})


router.get("/GET/v1/events", async(req, res)=>{
    try {
        const data = await Sample.find()
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(400).json({
            message:err.message
        })
        
    }
})

router.get("/GET/v1/events/:id", async(req, res)=>{
    try {
        const data = await Sample.findOne({_id:req.params.id})
        if(data){
        res.status(200).json({
            data
        })
    }else{
        res.status(404).json({
            error:"their is no such event with that id"
        })
    }
    } catch (err) {
        res.status(400).json({
            error:"their is no such event with that id"
        })
        
    }
})


router.delete("/DELETE/v1/events/:id", async(req, res)=>{
    try {
        const data = await Sample.findOne({_id:req.params.id})
        if(data){
        await Sample.deleteOne({_id:req.params.id})

        res.status(204).json({
            message:"Deleted Successfully"
        })
    }else{
        res.status(204).json({
            error:"their is no such event with that id"
        })
    }
    } catch (err) {
        res.status(204).json({
            error:"their is no such event with that id"
        })
        
    }
})


router.put("/PUT/v1/events/:id", async(req, res)=>{
    try {
        const newData = await Sample.updateOne({_id:req.params.id} , req.body)
        if(newData){
            const data = await Sample.findOne({_id:req.params.id})
            console.log(data)
        res.status(200).json({
            data
        })
    }else{
        res.status(404).json({
            error:"their is no such event with that id"
        })
    }
    } catch (err) {
        res.status(400).json({
            message:"Please fill all fields"
        })
        
    }
})

module.exports = router