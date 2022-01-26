import request from "request";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const handleSetupProfileAPI = () => {
    // Send the HTTP request to the Messenger Platform
    let request_body = {
        "get_started": {
            "payload": "GET_STARTED_PAYLOAD"
        },
        "persistent_menu": [
            {
                "locale": "default",
                "composer_input_disabled": false,
                "call_to_actions": [
                    {
                        "type": "web_url",
                        "title": "Website",
                        "url": "https://asoft.com.vn/",
                        "webview_height_ratio": "full"
                    },
                    {
                        "type": "web_url",
                        "title": "Youtube",
                        "url": "https://www.youtube.com/user/asoftsolution",
                        "webview_height_ratio": "full"
                    }
                ]
            }
        ]
    };
    return new Promise((resolve, reject) => {
        try {
            request({
                "uri": "https://graph.facebook.com/v12.0/me/messenger_profile",
                "qs": { "access_token": PAGE_ACCESS_TOKEN },
                "method": "POST",
                "json": request_body
            }, (err, response, body) => {
                console.log("---------------------------------------------------------");
                console.log("Logs setup persistent menu & get start button: ", response);
                console.log("---------------------------------------------------------");
                if (!err) {
                    return res.send('Setup done!');
                } else {
                    return res.send('Something wrong! with setup');
                }
            });
        } catch (e) {
            reject(e);
        }
    })
};

let getFacebookUsername = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            //curl -X GET ""
            let url = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`;
            request({
                "uri": url,
                "method": "GET",
            }, (err, res, body) => {
                if (!err) { 
                    //convert string to json object
                    body = JSON.parse(body);
                    let username = body.last_name + " " + body.first_name;
                    resolve(username);
                } else {
                    reject("Unable to send message: " + err);
                }
            });
        } catch(e) {
            reject(e);    
        }
    })
}

let sendTypingOn = (sender_psid) => {
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "sender_action": "typing_on",
    }
    return new Promise((resolve, reject) => {
        try {
            let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
            request({
                "uri": url,
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                if (!err) {
                    resolve('Typing on');
                } else {
                    reject('Something wrong! with typing on' + err);
                }
            });
        } catch(e) {
            reject(e);    
        }
    })
}

let markMessageRead = (sender_psid) => {
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "sender_action": "mark_seen",
    }
    return new Promise((resolve, reject) => {
        try {
            let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
            request({
                "uri": url,
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                if (!err) {
                    resolve('Seen!');
                } else {
                    reject('Something wrong! with mark seen' + err);
                }
            });
        } catch(e) {
            reject(e);    
        }
    })
}

module.exports = {
    handleSetupProfileAPI: handleSetupProfileAPI,
    getFacebookUsername: getFacebookUsername,
    sendTypingOn: sendTypingOn,
    markMessageRead: markMessageRead,
};