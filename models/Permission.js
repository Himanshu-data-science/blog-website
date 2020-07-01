"use strict";

module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('permission',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        type:{
         type:DataTypes.STRING,
         required:true   
        },
        updated_at:{
            type:DataTypes.DATE
        },
        deleted_at:{
            type:DataTypes.DATE
        }
    },{
        underscored:true
    });
}