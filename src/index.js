import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js'
import serverConfig from './config/serverConfig.js';
import ApiRoutes from './routes/index.js'
import {UserRepository ,TweetRepository , LikeRepository} from './repository/index.js';
import TweetService from './services/tweet-service.js';
import LikeService from './services/like-service.js';


const PORT = serverConfig.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',ApiRoutes)

app.listen(PORT,async()=>{
    console.log(`server started at port no.${PORT}`)

    await connect();
    console.log('Mongo db connected')
    
    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10);
    // const likeService = new LikeService();
    // const user = await userRepo.getAll()
    // await likeService.toggleLike(tweets[0].id,'Tweet',user[0].id)
    
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