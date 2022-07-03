const { response } = require('express');
const Investor = require('../models/investor');

module.exports.create = function(req,res){
    Investor.findOne({email: req.body.email},function(err, investor){
        if(err){console.log('Error in finding investor in database'); return;}
        if(!investor){
            Investor.create(req.body, function(err,investorCreated){
                if(err){console.log('Error in creating investor'); return;}
                console.log('Investor Created:',investorCreated);
                return res.redirect('/');
            });
        }else{
            return res.redirect('back');
        }
    });
}

module.exports.createSession = function(request,response){
    console.log("Investor Signed In");
    // if(request.user.email == "walter@example.com")
        // return response.redirect('/investor_db');
    return response.redirect('/investor_db');
}

// ======= sign out ==============
module.exports.destroySession = function(request,response){
    //given to request by passport
    request.logout();
    return response.redirect('/');
}

// ======= user-profile-update ==============
module.exports.editProfile= async(req,res)=>{
    try{
        const id= req.query.id;
     
        const Userdata = await  Investor.findByIdAndUpdate({_id:id},{$set:{ 
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            image:req.body.image

        }});
        

    }catch(error){
        console.log(error.message);
    }

    return res.redirect('/investor_db');


}


// ======= profile-about-section ==============//

module.exports.about= async(req,res)=>{
    
    try{
        const id= req.query.id;
        const investorInfo = await Investor.findById({_id:id});
        res.render('investor_about',{info: investorInfo} );
    }catch{
        console.log(error.message);
    }


}