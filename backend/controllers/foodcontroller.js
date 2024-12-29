import { food } from "../models/foodmodel.js";
import fs from "fs";

//add food item 
const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`

    const foods = new food({
         name:req.body.name,
         description:req.body.description,
         price:req.body.price,
         category:req.body.category,
         image:image_filename,
    })
    try {
        await foods.save()
        res.send({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"failed to add food"})
    }
}

//all food list 
const listFood = async(req,res)=>{
      try {
        const foodlist = await food.find({})
        res.json({success:true,data:foodlist})
      } catch (error) {
        console.log(error);
        res.json({success:false,message:"error while getting list"})
      }
}
//remove food item
const removefood = async(req,res)=>{
    try {
        const foodremove = await food.findById(req.body.id)
        fs.unlink(`uploads/${foodremove.image}`,()=>{})
        await food.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"failed to remove food"})
    }
}

export {addFood,listFood,removefood} 