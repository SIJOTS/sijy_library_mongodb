const express = require('express');
const admin1Router = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    admin1Router.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Library'
        });
    });


    admin1Router.post('/add',function(req,res){
        var item ={ 
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image

        }
       var author = Authordata(item);
       author.save();
       res.redirect('/authors');

        // res.send("<h1> kellabbu.... kellabbu.... <h1> ....okey....")
    });

    return admin1Router;

}

module.exports = router;

