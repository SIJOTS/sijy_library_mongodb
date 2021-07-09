const express = require('express');
const app = express();
const nav =  [

    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/admin',name:"Add Book"},
    {link:'/admin1',name:"Add Authors"}
]; 
const booksRouter= require('./src/routes/bookRouters')(nav);
const adminRouter= require('./src/routes/adminRouters')(nav);
const authorRouter= require('./src/routes/authorRouters')(nav);
const admin1Router= require('./src/routes/admin1Routers')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use('/books',booksRouter); //book router navigtion
app.use('/admin',adminRouter);
app.use('/authors',authorRouter);
app.use('/admin1',admin1Router);

app.get('/',function(req,res){//home res started //
    res.render("index",
    {
       nav,
        title:"library"
    });
});//home res ended //


app.listen(1012);
