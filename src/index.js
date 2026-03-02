const express = require('express');
const connect = require('./config/database')
const app = express();
const TweetRepository = require('./repository/tweet-repository')

const PORT = 3000
app.listen(PORT,async()=>{
    console.log(`server started at port no.${PORT}`)


    await connect();
    console.log('Mongo db connected')
    

})