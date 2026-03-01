const express = require('express');
const connect = require('./config/database')
const app = express();
const TweetRepository = require('./repository/tweet-repository')

const PORT = 3000
app.listen(PORT,async()=>{
    console.log(`server started at port no.${PORT}`)


    await connect();
    console.log('Mongo db connected')


    const repo = new TweetRepository();
    const tweet = await repo.update('69a1e5e3f42d48cd352bb445',{content : 'Fourth tweet'})
    console.log(tweet)


})