const express=require("express") 
const dotenv = require("dotenv").config()

const app = express()

app.get('/', (req, res) => {
    res.send('Comming soon !! 🥰 ') 
  })
app.post("/" , (req,res)=>{
    res.json(
      {
        "message " : "errur"
      }
    )
})
  
app.listen(process.env.PORT || 3000 , () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000 }`)
  })