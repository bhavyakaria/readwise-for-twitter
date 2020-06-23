const creds = {
    twitter: {
        consumer_key: process.env.consumer_key,
        consumer_secret: process.env.consumer_secret,
        access_token_key: process.env.access_token_key,
        access_token_secret: process.env.access_token_secret
    },
    email: {
        sender: process.env.sender_email,
        password: process.env.sender_password,

    }
}


module.exports = {
    creds
}