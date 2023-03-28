const MainModel =require("./MainModel")
const db = require('../db');
class FoodTypeModel extends MainModel{
    constructor(){
        super();
        this.table="food",
        this.columns=[
            "id",
            "name",
            "ingredients",
            "price",
            "type_id",
            "image",
            "count"
        ]
    }

    joinType(){
        return new Promise((res,reject)=>{
            db.query(`SELECT f.id, f.name as food_name, f.type_id, f.price,f.count,f.image, f.ingredients,ft.name FROM food as f JOIN food_type as ft ON f.type_id=ft.id `,(err,result)=>{
                if (err) {
                    reject("error")
                }else{
                    res(result)
                }
            })
        })
    }
}

module.exports =new FoodTypeModel;