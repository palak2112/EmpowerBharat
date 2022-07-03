const express = require('express');
const passport = require('passport');
const router=express.Router();
const investorsController=require('../controllers/investorsController');



router.post('/create',investorsController.create);
router.get('/sign-out',investorsController.destroySession);
router.post('/edit',passport.checkAuthentication,investorsController.editProfile);
router.get('/about',investorsController.about);
// router.get('/user_db',passport.checkAuthentication,investorsController.profile);
//use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local', //strategy to use
    {failureRedirect: '/login'}
) ,investorsController.createSession);



module.exports=router;