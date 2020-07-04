const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
const fs = require('fs')


console.log("The bot is starting");

// //Get the day I'm coding on
const differenceInDays = require('date-fns/differenceInDays')
const startDate = new Date('2020/04/02')
const today = new Date()
const daysBetween = differenceInDays(today, startDate)
const days = `{Day${daysBetween + 1}}`

//The tweeting part



tweetIt();

function tweetIt() {
    // const fileName = 'images/carrot.png'
    // let params = {
    //     encoding: 'base64'
    // }
    // const b64 = fs.readFileSync(fileName, params)
    // T.post('media/upload', {media_data: b64}, mergeContent)

    mergeContent()
    function mergeContent(err, data, response) {
        //This is where I will actually tweet
        if(err){
            console.log("Error in combining the image and tweet")
        }else {
            //const imageId = data.media_id_string;
            let tweet = {
                status: `${days} \nTook a break from Front End for a while currently focused on learning NodeJs and BabelJs for the past week which have become a challenging yet fun experience.\n#100DaysOfCode #javascript @zadock_254`
                //media_ids: [imageId]
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