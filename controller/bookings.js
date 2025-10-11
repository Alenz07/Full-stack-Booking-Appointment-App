const db = require("../utils/database")
const booking = require("../models/bookings")

sendData =async (req,res)=>{
try {
    const{name,phone,email} = req.body
    const book = await booking.create({
        name:name,phone:phone,email:email
    })
    console.log("Yess data is received")
    res.json("response")
} catch (error) {
    console.log(error)
}
}
getData= async (req,res)=>{
    try {
        const data = await booking.findAll()

    console.log("yes got the data")
    res.json(data)
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = {sendData,getData}
