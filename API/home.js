// ALL Api's are written over here
exports.homeDash=(req,res)=>{
    console.log('inside homeDash');
    return res.render('Dashboard');
}
exports.Signup=(req,res)=>{
    console.log('The details are',req.body);
    return res.json({
        details:req.body
    });
}