import {TweetRepository, HashtagRepository} from '../repository/index.js'

class TweetService {

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

     // create hashtags and add here
        /**
         * 1.bulk create in mongoose
         * 2.filter title of hashtags based on multiple tags
         * 3.how to to add tweet id inside all the hashtags 
         */


    async create(data){
        const content = data.content;

        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((e)=>e.substring(1).toLowerCase()); // this regex extract hashtags
        const tweet = await this.tweetRepository.create(data);

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        const TitleOfPresentTags = alreadyPresentTags.map(tag => tag.title)

        let newTags = tags.filter(tag => !TitleOfPresentTags.includes(tag)); 
        newTags = newTags.map(tag => {
            return {title: tag, tweets : [tweet.id]}
        })

        await this.hashtagRepository.bulkCreate(newTags); 

        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id)
            tag.save()
        })
        return tweet;
    }


}

export default TweetService;
/*
this is my #first #tweet i am very #excited
*/