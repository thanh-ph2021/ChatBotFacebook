require("dotenv").config();
import request from "request";
import homepageServices from "../services/homepageServices";
import chatbotServices from "../services/chatbotServices";

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let test = (req, res) => {
    return res.send("hello again");
}

let array1 = ["...", "cảm ơn bạn đã đến với page của chúng tôi", "fuck you", "???", "cmn", "chúc bạn có một ngày tốt lành", "tất niên vui vẻ nhé", "bạn thật là hài hước quá đi mà"]

let getWebhook = (req, res) => {
    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = MY_VERIFY_TOKEN;

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
}

let postWebhook = (req, res) => {
    let body = req.body;

    // Checks this is an event from a page subscription
    if (body.object === 'page') {

        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function (entry) {
            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });
        // Return a '200 OK' response to all events
        res.status(200).send('EVENT_RECEIVED');

    } else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }
}

// Handles messages events
async function handleMessage(sender_psid, received_message) {
    if (received_message && received_message.quick_reply && received_message.quick_reply.payload) {
        let payload = received_message.quick_reply.payload;
        switch (payload) {
            case "ASOFT-ERP":
                break;
            case "":
                break;
            case "ASOFT-OO":
                break;
            case "":
                break;
            case "ASOFT-HRM":
                break;
            case "products":
                await chatbotServices.sendProducts(sender_psid);
                break;
            case "services":
                await chatbotServices.sendServices(sender_psid);
                break;
            case "company":
                await chatbotServices.sendAboutCompany(sender_psid);
                break;
            case "solution":
                await chatbotServices.sendSolution(sender_psid);
                break;
            case "me":
                await chatbotServices.sendAboutMe(sender_psid);
                break;
        }

        return;
    }

    let response;
    // Checks if the message contains text
    if (received_message.text) {
        console.log(received_message.text);
        let input = received_message.text.toLowerCase();
        switch (input) {
            case "hi": case "hello":
                response = {
                    "text": "Chào anh/chị. Em có thể giúp gì cho anh/chị?",
                }
                // Sends the response message
                chatbotServices.sendMessage(sender_psid, response);
                break;
            default:
                let random = Math.floor(Math.random() * array1.length);
                response = {
                    "text": array1[random],
                }
                // Sends the response message
                chatbotServices.sendMessage(sender_psid, response);
        }
    } else if (received_message.attachments) {
        // Get the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Is this the right picture?",
                        "subtitle": "Tap a button to answer.",
                        "image_url": attachment_url,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Yes!",
                                "payload": "yes",
                            },
                            {
                                "type": "postback",
                                "title": "No!",
                                "payload": "no",
                            }
                        ],
                    }]
                }
            }
        }
        // Sends the response message
        await chatbotServices.sendMessage(sender_psid, response);
    }
}

// Handles messaging_postbacks events
async function handlePostback(sender_psid, received_postback) {
    let response, response1, response2;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    switch (payload) {
        case 'yes':
            response = { "text": "Thanks!" }
            // Send the message to acknowledge the postback
            await chatbotServices.sendMessage(sender_psid, response);
            break;
        case 'no':
            response = { "text": "Oops, try sending another image." }
            // Send the message to acknowledge the postback
            await chatbotServices.sendMessage(sender_psid, response);
            break;
        case 'GET_STARTED_PAYLOAD':
            await chatbotServices.sendMessageWelcomeNewUser(sender_psid);
            break;
        case 'MENU':
            await chatbotServices.sendMainMenu(sender_psid);
            break;
    }
}

let handleSetupInfor = (req, res) => {
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
                        "type": "postback",
                        "title": "Về menu chính",
                        "payload": "MENU"
                    },
                    {
                        "type": "web_url",
                        "title": "Vào website của công ty",
                        "url": "https://asoft.com.vn/",
                        "webview_height_ratio": "full"
                    },
                    {
                        "type": "web_url",
                        "title": "Vào trang youtube của công ty",
                        "url": "https://www.youtube.com/user/asoftsolution",
                        "webview_height_ratio": "full"
                    },
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
}

module.exports = {
    test: test,
    getWebhook: getWebhook,
    postWebhook: postWebhook,
    handleSetupInfor: handleSetupInfor
}