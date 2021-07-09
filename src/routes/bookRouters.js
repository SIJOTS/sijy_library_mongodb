const express = require('express');
const booksRouter = express.Router();//book router creation
const Bookdata = require('../model/Bookdata');
function router(nav){
    // var books = [ //book router creating res started/////adding book into the books page or list of books .....array//
    //     {
    //         title: "My Story",
    //         author: "Kamala Das",
    //         genre: "Autobiography",
    //         img:"My_Story_Kamala_Das book1.jpeg"//give the path of img
    
    //     },
    //     {
    //        title: "manje",
    //        author: "M. T. Vasudevan Nair",
    //        genre: "Novel",
    //        img:"manje book2.jfif"//give the path of img
    
    //    },
    //    {
    //        title: "Pathummayude_Aadu",
    //        author: "Vaikom Muhammad Basheer",
    //        genre: "novel",
    //        img:"Pathummayude_Aadu book3.jpg"//give the path of img
    
    //    }
    // ];
  
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:"library",
                books
            });
       });
    });//books router creating res ended//
    
    
    
    booksRouter.get('/:id',function(req,res){
       const id = req.params.id;
       Bookdata.findOne({_id:id})
       .then(function(book){
            res.render("book",{
                nav,
                title:"library",
                book
             });
        })
       
    });

    return booksRouter;

}


module.exports = router