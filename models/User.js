"use strict";

module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('user',{
        id:{
            type:DataTypes.UUID ,
            primaryKey: true
        },
        first_name:{
            type:DataTypes.STRING,
            required:true
        },
        last_name:{
            type:DataTypes.STRING,
            required:true
        },
        userName:{
            type:DataTypes.STRING,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            required:true,
            len: [8,20]
        },
        email:{
            type:DataTypes.STRING,
            required:true,
            isEmail: true
        },
        updated_at:{
            type:DataTypes.DATE
        },
        deleted_at:{
            type:DataTypes.DATE
        },
        permission_id:{
            type:DataTypes.INTEGER,
            required:true
        }
       
    },{
        underscored:true
    });

}