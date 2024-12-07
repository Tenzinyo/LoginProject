//all the main things for the project

const express = require('express') ;//import express 
const app = express();
const mysql = require('mysql');
const path= require('path')  //import path

const dotenv= require('dotenv'); 

dotenv.config({ path:'./.env'})  //to secure the passwords and email info

const db= mysql.createConnection({
    host : process.env.DATEBASE_HOST,    //to secure private info
    port:8889,
    user: process.env.DATEBASE_USER,
    password :process.env.DATEBASE_PASSWORD,
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    database: process.env.DATABASE 

});

//set public directory to put any css or java script files for the front end
const publicDir= path.join(__dirname, './public')  //path.join takes two parameters, ./ to go on the same level as app.js
//to make sure express is actua;y using this public directory

app.use(express.static(publicDir)) ;

//parse url encoded bodies 

app.use(express.urlencoded({extended:false}));
//parse json bodiess
app.use(express.json());


//creating homepage
app.set('view engine', 'hbs');

db.connect( (error)=>{
    if(error) {
        console.log(error)
    
    } else{
        console.log('mysql connected')
    }
})

//define routes from routes pages and auth for the register page
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, ()=>{   //port anytiging inbetween 3000-9000
    console.log('port connected')  //making sure this will run
})  ;


