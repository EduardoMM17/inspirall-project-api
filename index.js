const express = require("express");
const app = express();

app.use(express.json())

app.post('/callSimplefact', (req, res)=>{
    console.log(`Calling Simplefact. Body:  ${JSON.stringify(req.body)}`);
    return res.json(req.body)
} )

const port = 3000;
app.listen(port,(err)=>{
    if(err) {
        console.log(`Could not start server! At port ${port}`)
    }

    console.log("Successfully started server!")
})