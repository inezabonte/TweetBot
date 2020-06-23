console.log("The bot is starting");

const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);

T.get('search/tweets', {q: 'JavaScript', count: 100}, (err, data, response) => {
    if(err) {
        console.log("Something aint right")
    } else{
        const tweets = data.statuses
        for(let i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text)
        }
    }
   
});