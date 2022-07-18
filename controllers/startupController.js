const Startup = require('../models/startup');

module.exports.create = function(req,res){
    Startup.findOne({email: req.body.email},function(err, startup){
        if(err){console.log('Error in finding startup in database'); return;}
        if(!startup){
            console.log(req.body);
            Startup.create(req.body, function(err,startupCreated){
                if(err){console.log('Error in creating startup');

                 return;}
                console.log('Startup Created:',startupCreated);
                return res.redirect('/');
            });
        }else{
            return res.redirect('back');
        }
    });
}

module.exports.createSession = function(request,response){
    console.log("startup Signed In");
    // if(request.user.email == "ira@cred.com")
    //     return response.redirect('/startup_db');
    return response.redirect('/startup_db');
}

// ======= sign out ==============
module.exports.destroySession = function(request,response){
    //given to request by passport
    request.logout();
    return response.redirect('/');
}


// ======= user-profile-update ==============//
module.exports.editProfile= async(req,res)=>{
    try{
        const id= req.query.id;
     
        const Userdata = await  Startup.findByIdAndUpdate({_id:id},{$set:{ 
            companyName:req.body.name,
            email:req.body.email,
            Address:req.body.address,
            City:req.body.city,
            Country:req.body.country,
            Code:req.body.code,
            Category: req.body.category,
            Product: req.body.product,
            Logo: req.body.logo,
            Website: req.body.website
        }});
        

    }catch(error){
        console.log(error.message);
    }

    return res.redirect('/startup_db');


}


// ======= profile-about-section ==============//

module.exports.about= async(req,res)=>{
    try{
        const id= req.query.id;
        const companyInfo = await  Startup.findById({_id:id});
        res.render('startup_about',{info: companyInfo} );
    }catch{
        console.log(error.message);
    }


}
