const express = require('express');
const connect = require('./config/database')
const {PORT} = require('./config/serverConfig')
const app = express();
const TweetRepository = require('./repository/tweet-repository')


app.listen(PORT,async()=>{
    console.log(`server started at port no.${PORT}`)


    await connect();
    console.log('Mongo db connected')
})