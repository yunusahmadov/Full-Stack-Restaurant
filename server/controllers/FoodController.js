const Foods = require('../models/Foods');
const food = Foods;

const insertFood = (req) => {
    // console.log(req.file.filename)
    food.insert({...req.query, image: req.file.filename})
    return 'Food added successfully';
}

const getFood =async (req) => {
    return await food.joinType();
}
const getFoodByType= async (req)=>{
    return await food.get(`WHERE type_id=${req.query.type_id}`)
}

const updateFood=(req)=>{
    // return food.update(req.query.id,{...req.query, image:req.file.filename})
    if (req.file && req.file.filename) {
        // Обновление модели с изображением
        return food.update(req.query.id,{...req.query, image:req.file.filename})
    } else {
        // Обновление модели без изображения
        return food.update(req.query.id,req.query)
    }
}

const deleteFood=(req)=>{
    return food.delete(req.query.id)
  }

  const getOneFood = async (req) => {
    return await food.show(req.query.id)
  }

module.exports = { insertFood, getFood,getFoodByType,updateFood,deleteFood,getOneFood}