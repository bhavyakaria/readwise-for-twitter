const express = require('express');
require('dotenv').config();
const Twitter = require('twitter');
const config = require('./config/config');

const app = express();
const twitter = new Twitter(config);

// Set up your search parameters
const params = {
    q: 'Reliance Industries',
    count: 10,
    result_type: 'popular',
    lang: 'en'
}

twitter.get('search/tweets', params, function (err, data, response) {
    if (!err) {
        const tweets = data['statuses'];
        for (let i = 0; i < tweets.length; i++) {
            console.log(tweets[i]['text']);
        }
    } else {
        console.log(err);
    }
});

// Bodyparser
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));