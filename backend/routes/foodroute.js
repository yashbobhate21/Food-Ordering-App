import express from "express"
import { addFood, listFood, removefood } from "../controllers/foodcontroller.js"
import multer from "multer"

const foodRouter = express.Router();

//image storing
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"), addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removefood)


export default foodRouter;