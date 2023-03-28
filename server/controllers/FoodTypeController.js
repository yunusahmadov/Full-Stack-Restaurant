const FoodType =require("../models/Foodtype")
const foodtype=FoodType

const insertFoodType=(req)=>{
    foodtype.insert(req.query)
    return 'Food type added succesfuly'
}

const getFoodType=async(req)=>{
    return await foodtype.get();
}
const updateFoodType = (req)=>{
  return foodtype.update(req.query.id, req.query);
}
  const deleteFoodType=(req)=>{
    return foodtype.delete(req.query.id)
  }
  
  const getOneFoodType = async (req) => {
    return await foodtype.show(req.query.id)
  }

module.exports={insertFoodType,getFoodType,updateFoodType,deleteFoodType,getOneFoodType}