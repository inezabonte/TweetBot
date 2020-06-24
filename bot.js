console.log("The bot is starting");

// //Get the day I'm coding on
const differenceInDays = require('date-fns/differenceInDays')
const startDate = new Date('2020/04/02')
const today = new Date()
const daysBetween = differenceInDays(today, startDate)
const days = `{Day${daysBetween + 1}}`

//The tweeting part
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
const fs = require('fs')

tweetIt();

function tweetIt() {
    const fileName = 'images/Day84.png'
    let params = {
        encoding: 'base64'
    }
    const b64 = fs.readFileSync(fileName, params)
    T.post('media/upload', {media_data: b64}, mergeContent)


    function mergeContent(err, data, response) {
        //This is where I will actually tweet
        if(err){
            console.log("Error in combining the image and tweet")
        }else {
            const imageId = data.media_id_string;
            let tweet = {
                status: `${days} \n Tweeting from my tweetBot in the console 😁 \n #100DaysOfCode #javascript #nodejs @zadock_254`,
                media_ids: [imageId]
            }

            T.post('statuses/update', tweet, tweeted)
        }
        
    }

    function tweeted(err, data, response){
        if(err){
            console.log('Your tweet was not posted🚨')
        } else{
            console.log('Tweet Posted ✅')
        }
    }
}