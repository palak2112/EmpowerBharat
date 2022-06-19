module.exports.startup = function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/profile')
    }

    return res.render('startup-signup');
}

module.exports.investor = function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/profile')
    }
    return res.render('investor-signup');
}