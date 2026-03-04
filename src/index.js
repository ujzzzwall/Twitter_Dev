const express = require('express');
const connect = require('./config/database')
const {PORT} = require('./config/serverConfig')
const app = express();
const {TweetRepository,HashtagRepository} = require('./repository/index')
const TweetService = require('./services/tweet-service')

app.listen(PORT,async()=>{
    console.log(`server started at port no.${PORT}`)

    await connect();
    console.log('Mongo db connected')

    let Service = new TweetService();
    const tweet = await Service.create({content:'is #tweets working'})
    console.log(tweet)
})







    // create demo hashtags 
    // let repo = new HashtagRepository();
    // await repo.bulkCreate(
    // [{
    //     title :'Trend',
    //     tweets : []
    // },{
    //     title :'Excited',
    //     tweets : []
    // },{
    //     title :'Python',
    //     tweets : []
    // },{
    //     title :'Fun',
    //     tweets : []
    // }]
    // )