const express = require("express")
const db  = require("./utils/database")
const app = express()
const path = require("path")
const booking = require("./routes/bookings")
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views","index.html"))
})
app.use("/booking", booking)

app.use(express.static('public'))

app.listen(2000, () => {
    console.log("✅ Server is running on http://localhost:2000");
  });
  db.sync({ force: false }) // true = drops & recreates table; false = keeps existing
  .then(() => console.log("Database & tables synced!"))
  .catch(err => console.error(err));