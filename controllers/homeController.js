const Startup = require('../models/startup');
const Investor = require('../models/investor');

module.exports.home = function(req,res){
    if(res.locals.user){
        console.log(res.locals.user);
    }
    return res.render('index');
}

module.exports.login = function(req,res){
    if(req.isAuthenticated())
    {
       return  res.redirect('/profile')
    }

    return res.render('signin');
}

module.exports.startups = async(req,res)=>{
    try{
        const startupList= await Startup.find();
        res.render('startups',{list: startupList} );
    }catch{
        console.log(error.message);
    }
  
}

module.exports.investors = async(req,res)=>{
    try{
        const investorList= await Investor.find();
        res.render('investors',{list: investorList} );
    }catch{
        console.log(error.message);
    }
   
}

module.exports.learn = function(req,res){
    return res.render('learn');
}

module.exports.edu = function(req,res){
    return res.render('school_colleges');
}

module.exports.featured = function(req,res){
    return res.render('featured');
}

module.exports.startup_db = function(req,res){
    return res.render('startup_db');
}

module.exports.investor_db = function(req,res){
    return res.render('investor_db');
}
module.exports.razorpay = function(req,res){
    return res.render('razorpay');
}

module.exports.comingsoon = function(req,res){
    return res.render('comingsoon');
}