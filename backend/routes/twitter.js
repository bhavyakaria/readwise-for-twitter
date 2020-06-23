const express = require('express');
const Twitter = require('twitter');
const config = require('../config/config');
const { json } = require('body-parser');
const router = express.Router();

const twitter = new Twitter(config);

router.get('/search', (req, res) => {
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
            res.json(tweets);
        } else {
            console.log(err);
        }
    });

});

module.exports = router;