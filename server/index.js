const express =require("express")
const multer=require("multer")
const path=require("path")

const app =express()
const cors=require("cors")
const route =require("./router")
const { diskStorage } = require("multer")
app.use(cors());



const storage=diskStorage({
    destination :'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({
   storage:storage
})

app.use('/image',express.static('upload/images'))
app.post("/insert-food",upload.single('image'),(req,res)=>{
    res.json({
        success:1,
        profile_url:`http://localhost:5500/image/${req.file.filename}`

    })
})

app.use("/api",route)
app.listen(5500,()=>{
    console.log("Server running...");
})

// const express =require("express")
// const app =express()
// const cors=require("cors")
// const route =require("./router")
// app.use(cors());



// app.use("/api",route)
// app.listen(5500,()=>{
//     console.log("Server running...");
// })