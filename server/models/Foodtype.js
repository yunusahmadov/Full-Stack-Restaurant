const MainModel =require("./MainModel")
const db = require('../db');


class FoodTypeModel extends MainModel{
    constructor(){
        super();
        this.table="food_type",
        this.columns=[
            "id",
            "name"
        ]
    }

}

module.exports =new FoodTypeModel;