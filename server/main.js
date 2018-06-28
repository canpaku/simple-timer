// require('dotenv').config();
//
// db.connect({
//     key: process.env.CONSUMER_KEY,
//     secret: process.env.CONSUMER_SECRET,
//     token: process.env.ACCESS_TOKEN,
//     token_secret: process.env.ACCESS_TOKEN_SECRET
// });
//
// if (Meteor.isServer) {
//     Meteor.startup(function () {
//         // code to run on server at startup
//
//         var Twit = Meteor.npmRequire('twit');
//
//         var T = new Twit({
//             //ひみつ.txt
//         });
//
//         T.post('statuses/update', {status: 'あいうeo'}, function(error, tweet, response) {
//             if (!error) {
//                 console.log(tweet);
//
//             } else {
//                 console.log('error');
//             }
//         });
//
//     });
// }
