exports.login = (req,res)=>{
    console.log("Rehed here")
    res.render('main',{name:req.body.userName})
}
