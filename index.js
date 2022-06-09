let express = require('express');
let app = express();


app.get("/", (req, res, next)=>{
    res.json({msg: "Good morning"});
});
const port = 3005;
app.listen(port, ()=>{
    console.log ("wellcome");
})