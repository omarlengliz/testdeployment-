const express=require("express") 
const dotenv = require("dotenv").config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from render.com') 
  })
app.post("/" , (req,res)=>{
    res.json(
        {"message" : "your body has been sent successfully " , 
        "body" : req.body }
    )
})
  
app.listen(process.env.PORT || 3000 , () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000 }`)
  })