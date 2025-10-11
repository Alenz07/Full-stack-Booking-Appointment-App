const db = require("../utils/database");
const { Sequelize, DataTypes } = require('sequelize');
const bookings = db.define("bookings",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.INTEGER
  
    },
    email:{
        type: DataTypes.STRING
    }

})
module.exports  = bookings

