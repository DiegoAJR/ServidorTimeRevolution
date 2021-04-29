const path = require("path");

exports.getTimeRevolution = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","timerevolution.html"));
}


exports.getJuegoEjecutable = (req,res)=>{
    res.download(path.join(__dirname,'..','Public','resources','TimeRev.zip'));
}

