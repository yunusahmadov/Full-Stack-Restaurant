const MainModel =require("./MainModel")

class UserModel extends MainModel{
    constructor(){
        super();
        this.table="users",
        this.columns=[
            "id",
            "email",
            "password",
            "role"
        ]
    }
}

module.exports =new UserModel;