import express from 'express';
import {connect} from './config/database.js'
import serverConfig from './config/serverConfig.js';
const PORT = serverConfig.PORT;
const app = express();
import TweetService from './services/tweet-service.js'
app.listen(PORT,async()=>{
    console.log(`server started at port no.${PORT}`)

    await connect();
    console.log('Mongo db connected')

    let Service = new TweetService();
    const tweet = await Service.create({content:'done with #refactor ?'})
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