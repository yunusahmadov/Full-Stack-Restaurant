const MainModel =require("./MainModel")
const db = require('../db');


class Comments extends MainModel{
    constructor(){
        super();
        this.table="comment",
        this.columns=[
            "id",
            "name",
            "comment",
            "rating"
        ]
    }

}

module.exports =new Comments;