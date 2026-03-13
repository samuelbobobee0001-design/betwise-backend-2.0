const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")

const app = express()
app.use(cors())

const API_KEY = "0d44b6f148msh3c7c93d3bf2c9a9p151e4ejsn0fe734f52348"
const API_HOST = "api-football-v1.p.rapidapi.com"

app.get("/matches", async (req,res)=>{

const league = req.query.league || "39"

const url = `https://${API_HOST}/v3/fixtures?league=${league}&season=2025`

try{

const response = await fetch(url,{
headers:{
"X-RapidAPI-Key":API_KEY,
"X-RapidAPI-Host":API_HOST
}
})

const data = await response.json()

res.json(data)

}catch(error){

res.json({error:"Failed to fetch matches"})

}

})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

console.log("Server running")

})