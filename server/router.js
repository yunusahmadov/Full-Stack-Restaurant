const express = require("express");
const multer=require("multer")
const path=require("path")

const { diskStorage } = require("multer")

const { insertFood, getFood,getFoodByType, updateFood,deleteFood, getOneFood} = require("./controllers/FoodController");
const { insertFoodType, getFoodType ,getOneFoodType,updateFoodType,deleteFoodType} = require("./controllers/FoodTypeController");
const { insertComment, getComment,deleteComment,getCommentByHighToLow,getCommentByLowToHigh } = require("./controllers/CommentController");

const { registerRequest,loginRequest, checkToken } = require("./requests/middleware");
const storage=diskStorage({
    destination :'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({
    storage:storage
 })
const route = express.Router();


//User
route.post("/register", registerRequest, (req, res)=>{
    
});

route.post("/login", loginRequest, (req, res)=>{
   
});
route.get("/users",checkToken,(req,res)=>{
    res.status(200).send('salam')
})

//Food
route.post('/insert-food',upload.single('image'), (req,res)=>{
    insertFood(req)
    res.status(200).send(`Food: ${req.query.name} added succesfully`)
})
route.get('/get-food',(req,res)=>{
    getFood()
    .then(resp=>{
        res.status(200).send(resp)
    });
});
route.get('/get-food-by-type',(req,res)=>{
    getFoodByType(req)
    .then(resp=>{
    res.status(200).send(resp)
    });
});
route.put('/update-food',upload.single('image'),(req,res)=>{
    updateFood(req)
    res.status(200)
    .send(`Food by ID: ${req.query.id} has been updated`)
})
route.delete('/delete-food',(req,res)=>{
    deleteFood(req)
    .then(resp=>{
        res.status(200).send(`Food by ID: ${req.query.id} has been deleted`)
    })
})
route.get('/get-one-food', (req, res)=>{
    getOneFood(req)
    .then(resp=>{
        res.status(200).send(resp)
    })
})

//Food-type
route.post('/insert-food-type',(req,res)=>{
    insertFoodType(req)
    res.status(200).send(`Food type ${req.query.name} added succesfully`)
})

route.get('/get-food-type',(req,res)=>{
    getFoodType()
    .then(resp=>{
        res.status(200).send(resp)
    })
})
route.get('/get-one-food-type', (req, res)=>{
    getOneFoodType(req)
    .then(resp=>{
        res.status(200).send(resp)
    })
})
route.put('/update-food-type',(req,res)=>{
    updateFoodType(req)
    res.status(200)
    .send(`Food Type by ID: ${req.query.id} has been updated`)
})

route.delete('/delete-food-type',(req,res)=>{
    deleteFoodType(req)
    .then(resp=>{
        res.status(200).send(`Food Type by ID: ${req.query.id} has been deleted`)
    })
})


//Comment
route.post('/add-comment',(req,res)=>{
    insertComment(req)
    res.status(200).send(`Comment by${req.query.name} added succesfully`)
})

route.get('/get-comments',(req,res)=>{
    getComment()
    .then(resp=>{
        res.status(200).send(resp)
    })
})
route.delete('/delete-comment',(req,res)=>{
    deleteComment(req)
    .then(resp=>{
        res.status(200).send(`Comment by ID: ${req.query.id} has been deleted`)
    })
})

route.get('/get-comment-high-to-low',(req,res)=>{
    getCommentByHighToLow()
    .then(resp=>{
        res.status(200).send(resp)
    })
})
route.get('/get-comment-low-to-high',(req,res)=>{
    getCommentByLowToHigh()
    .then(resp=>{
        res.status(200).send(resp)
    })
})



module.exports = route;