const {TweetRepository, HashtagRepository} = require('../repository/index')

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extract hashtags
        tags = tags.map((e)=>e.substring(1))
        console.log(tags);

        const tweet = await this.tweetRepository.create(data);
        // create hashtags and add here
        /**
         * 1.bulk create in mongoose
         * 2.filter title of hashtags based on multiple tags
         * 3.how to to add tweet id inside all the hashtags
         */
        return tweet;
    }
}

module.exports = TweetService;
/*
this is my #first #tweet i am very #excited
*/