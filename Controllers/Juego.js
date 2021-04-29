const path = require("path");

exports.getTimeRevolution = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","timerevolution.html"));
}