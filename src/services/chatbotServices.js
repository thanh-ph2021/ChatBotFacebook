import request from "request";
import homepageServices from "../services/homepageServices";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let sendMessageWelcomeNewUser = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let username = await homepageServices.getFacebookUsername(sender_psid);
            let response1 = { "text": `Chào mừng ${username} đến page của chúng tôi, rất vui được trả lời những thắc mắc từ bạn` }
            let response2 = {
                "attachment": {
                    "type": "image",
                    "payload": {
                        "url": "https://as1.ftcdn.net/v2/jpg/01/76/98/40/1000_F_176984023_8I82qQPmKn8TqNAZXIYMCSiwccoUiPBg.jpg"
                    }
                }
            }
            let response3 = {
                "text": "Bạn muốn hỏi về cái gì:",
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Sản phẩm",
                        "payload": "products",
                    }, {
                        "content_type": "text",
                        "title": "Dịch vụ",
                        "payload": "services",
                    }, {
                        "content_type": "text",
                        "title": "Công ty",
                        "payload": "company",
                    }, {
                        "content_type": "text",
                        "title": "Giải pháp",
                        "payload": "solution",
                    }, {
                        "content_type": "text",
                        "title": "Tôi",
                        "payload": "me",
                    }
                ]
            }
            await sendMessage(sender_psid, response1);
            await sendMessage(sender_psid, response2);
            await sendMessage(sender_psid, response3);
        } catch (e) {
            reject(e);
        }
    })
}

let sendMessage = (sender_psid, response) => {
    return new Promise(async (resolve, reject) => {
        try {
            await homepageServices.markMessageRead(sender_psid);
            await homepageServices.sendTypingOn(sender_psid);

            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "message": {
                    ...response,
                },
            }

            setTimeout(() => {
                let url = `https://graph.facebook.com/v7.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
                request({
                    "uri": url,
                    "method": "POST",
                    "json": request_body
                }, (err, res, body) => {
                    if (!err) {
                        resolve('message sent!')
                    } else {
                        reject("Unable to send message:" + err);
                    }
                });
            }, 3000);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    sendMessage: sendMessage,
    sendMessageWelcomeNewUser: sendMessageWelcomeNewUser,
};