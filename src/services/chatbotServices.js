import { append } from "express/lib/response";
import request from "request";
import homepageServices from "../services/homepageServices";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let sendProducts = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response1 = { "text": "Công ty của tôi có rất nhiều sản phẩm, cụ thể có 5 cái điển hình." }
            let response2 = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "ASOFT-ERP",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271490913_441984524307775_6972217632502576627_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0OCxwDV2J4oAX8_DuWw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLQIqut0Ct97-TJDG5JW13M71iWcvGCiAedusCkAe7oPw&oe=62165391",
                                "subtitle": "Phần mềm hoạch định nguồn nhân lực",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/hoach-dinh-nguon-luc-doanh-nghiep-asoft-erp/1/",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về sản phẩm này",
                                        "payload": "ASOFT-ERP"
                                    }
                                ]
                            },
                            {
                                "title": "ASOFT SUPERAPPS",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271490913_441984524307775_6972217632502576627_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0OCxwDV2J4oAX8_DuWw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLQIqut0Ct97-TJDG5JW13M71iWcvGCiAedusCkAe7oPw&oe=62165391",
                                "subtitle": "Siêu ứng dụng di động",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/sieu-ung-dung-di-dong-asoft-superapps/16",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về sản phẩm này",
                                        "payload": "ASOFT SUPERAPPS"
                                    }
                                ]
                            },
                            {
                                "title": "ASOFT-OO",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271490913_441984524307775_6972217632502576627_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0OCxwDV2J4oAX8_DuWw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLQIqut0Ct97-TJDG5JW13M71iWcvGCiAedusCkAe7oPw&oe=62165391",
                                "subtitle": "Phần mềm văn phòng điện tử",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/hoach-dinh-nguon-luc-doanh-nghiep-asoft-erp/1/",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về sản phẩm này",
                                        "payload": "ASOFT-OO"
                                    }
                                ]
                            },
                            {
                                "title": "ASOFT-CRM",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271490913_441984524307775_6972217632502576627_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0OCxwDV2J4oAX8_DuWw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLQIqut0Ct97-TJDG5JW13M71iWcvGCiAedusCkAe7oPw&oe=62165391",
                                "subtitle": "Quản lý quan hệ khách hàng",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/quan-ly-quan-he-khach-hang-asoft-crm/10",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về sản phẩm này",
                                        "payload": "ASOFT-CRM"
                                    }
                                ]
                            },
                            {
                                "title": "ASOFT-HRM",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271490913_441984524307775_6972217632502576627_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0OCxwDV2J4oAX8_DuWw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLQIqut0Ct97-TJDG5JW13M71iWcvGCiAedusCkAe7oPw&oe=62165391",
                                "subtitle": "Quản lý nhân sự, tiền lương",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/quan-tri-nhan-su-tien-luong-asoft-hrm/9",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về sản phẩm này",
                                        "payload": "ASOFT-HRM"
                                    }
                                ]
                            },
                        ]
                    }
                }
            }
            let response3 = { "text": "Nếu bạn muốn xem nhiều sản phẩm hơn thì vào đây nhé:\nhttps://asoft.com.vn/vn/dich-vu/tu-van-he-thong-hoa-va-tu-dong-hoa-he-thong-quan-tri/22" }
            await sendMessage(sender_psid, response1);
            await sendMessage(sender_psid, response2);
            await sendMessage(sender_psid, response3);
            resolve('sent!');
        } catch (e) {
            reject(e);
        }
    })
}

let sendServices = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response1 = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "Tư vấn Hệ thống hóa và tự động hóa hệ thống quản trị",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271826465_701533674165297_7966582428101569605_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JMk-Ut41W6EAX-jB_bE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-FtVLI9SOoeTAdzcolSpYMp7ryQCqgUZmrVUr35Rf1w&oe=6219B485",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/dich-vu/tu-van-he-thong-hoa-va-tu-dong-hoa-he-thong-quan-tri/22",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về dịch vụ này",
                                        "payload": "TDHQT_SERVICE"
                                    }
                                ]
                            },
                            {
                                "title": "Khảo sát - Tư vấn - Triển khai hệ thống ERP",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271826465_701533674165297_7966582428101569605_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JMk-Ut41W6EAX-jB_bE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-FtVLI9SOoeTAdzcolSpYMp7ryQCqgUZmrVUr35Rf1w&oe=6219B485",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/sieu-ung-dung-di-dong-asoft-superapps/16",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về dịch vụ này",
                                        "payload": "KS_TV_TK_ERP_SERVICE"
                                    }
                                ]
                            },
                            {
                                "title": "Hiệu chỉnh và cài đặt hệ thống ERP",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271826465_701533674165297_7966582428101569605_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JMk-Ut41W6EAX-jB_bE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-FtVLI9SOoeTAdzcolSpYMp7ryQCqgUZmrVUr35Rf1w&oe=6219B485",

                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/hoach-dinh-nguon-luc-doanh-nghiep-asoft-erp/1/",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về dịch vụ này",
                                        "payload": "HC_CD_ERP"
                                    }
                                ]
                            },
                            {
                                "title": "Bảo hành - Bảo trì hệ thống phần mềm",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271826465_701533674165297_7966582428101569605_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JMk-Ut41W6EAX-jB_bE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-FtVLI9SOoeTAdzcolSpYMp7ryQCqgUZmrVUr35Rf1w&oe=6219B485",

                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/quan-ly-quan-he-khach-hang-asoft-crm/10",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về dịch vụ này",
                                        "payload": "BH_BT_SERVICE"
                                    }
                                ]
                            },
                            {
                                "title": "Đào tạo vận hành hệ thống phần mềm",
                                "image_url": "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/271826465_701533674165297_7966582428101569605_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JMk-Ut41W6EAX-jB_bE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-FtVLI9SOoeTAdzcolSpYMp7ryQCqgUZmrVUr35Rf1w&oe=6219B485",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/quan-tri-nhan-su-tien-luong-asoft-hrm/9",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về dịch vụ này",
                                        "payload": "DTVH_SERVICE"
                                    }
                                ]
                            },
                        ]
                    }
                }
            }
            let response2 = { "text": "Nếu bạn muốn xem nhiều dịch vụ hơn thì vào đây nhé:\nhttps://asoft.com.vn/vn/dich-vu/tu-van-he-thong-hoa-va-tu-dong-hoa-he-thong-quan-tri/22" }
            await sendMessage(sender_psid, response1);
            await sendMessage(sender_psid, response2);
            resolve('sent!');
        } catch (e) {
            reject(e);
        }
    })
}

let sendSolution = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response1 = { "text": "Công ty chúng tôi cung cấp giải pháp cho từng ngành nghề cụ thể" }
            let response2 = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "Ngành dự án - xây dựng",
                                "image_url": "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/270834846_694910974850192_2992246407733022101_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=00O8oa8kCuYAX-MIhX4&_nc_ht=scontent-hkg4-2.xx&oh=03_AVII-eqUJGzzxaOikRKM8UKpSzUkQGPsJHGhWdfSBDvZkA&oe=62182ABB",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/giai-phap-erp/nganh-du-an---xay-dung/10/1",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về giải pháp này",
                                        "payload": "DA_XD_SOLUTION"
                                    }
                                ]
                            },
                            {
                                "title": "Ngành thương mại - phân phối",
                                "image_url": "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/270834846_694910974850192_2992246407733022101_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=00O8oa8kCuYAX-MIhX4&_nc_ht=scontent-hkg4-2.xx&oh=03_AVII-eqUJGzzxaOikRKM8UKpSzUkQGPsJHGhWdfSBDvZkA&oe=62182ABB",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/phan-mem-quan-ly/sieu-ung-dung-di-dong-asoft-superapps/16",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về giải pháp này",
                                        "payload": "TM_PP_SOLUTION"
                                    }
                                ]
                            },
                            {
                                "title": "Ngành bán lẻ - chuỗi cửa hàng",
                                "image_url": "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/270834846_694910974850192_2992246407733022101_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=00O8oa8kCuYAX-MIhX4&_nc_ht=scontent-hkg4-2.xx&oh=03_AVII-eqUJGzzxaOikRKM8UKpSzUkQGPsJHGhWdfSBDvZkA&oe=62182ABB",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/giai-phap-erp/nganh-ban-le---chuoi-cua-hang/8/1",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về giải pháp này",
                                        "payload": "BL_CCH_SOLUTION"
                                    }
                                ]
                            },
                            {
                                "title": "Ngành dệt may",
                                "image_url": "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/270834846_694910974850192_2992246407733022101_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=00O8oa8kCuYAX-MIhX4&_nc_ht=scontent-hkg4-2.xx&oh=03_AVII-eqUJGzzxaOikRKM8UKpSzUkQGPsJHGhWdfSBDvZkA&oe=62182ABB",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/giai-phap-erp/nganh-det-may/7/1",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về giải pháp này",
                                        "payload": "DM_SOLUTION"
                                    }
                                ]
                            },
                            {
                                "title": "Ngành cơ khí - chế tạo",
                                "image_url": "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/270834846_694910974850192_2992246407733022101_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=00O8oa8kCuYAX-MIhX4&_nc_ht=scontent-hkg4-2.xx&oh=03_AVII-eqUJGzzxaOikRKM8UKpSzUkQGPsJHGhWdfSBDvZkA&oe=62182ABB",
                                "default_action": {
                                    "type": "web_url",
                                    "url": "https://asoft.com.vn/",
                                    "webview_height_ratio": "tall",
                                },
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://asoft.com.vn/vn/giai-phap-erp/nganh-co-khi---che-tao/13/1",
                                        "title": "Xem chi tiết"
                                    }, {
                                        "type": "postback",
                                        "title": "Hỏi về giải pháp này",
                                        "payload": "CK_CT_SOLUTION"
                                    }
                                ]
                            },
                        ]
                    }
                }
            }
            let response3 = { "text": "Nếu bạn muốn xem nhiều giải pháp hơn thì vào đây nhé:\nhttps://asoft.com.vn/vn/giai-phap-erp" }
            await sendMessage(sender_psid, response1);
            await sendMessage(sender_psid, response2);
            await sendMessage(sender_psid, response3);
        } catch (e) {
            reject(e);
        }
    })
}

let sendAboutCompany = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = { "text": "Bạn vui lòng vào đây nha:\n https://asoft.com.vn/vn/gioi-thieu//" }
            await sendMessage(sender_psid, response);
            resolve('sent!');
        } catch (e) {
            reject(e);
        }
    })
}

let sendAboutMe = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = { "text": "Bạn không cần biết đâu!" }
            await sendMessage(sender_psid, response);
        } catch (e) {
            reject(e);
        }
    })
}

let sendMessageWelcomeNewUser = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let username = await homepageServices.getFacebookUsername(sender_psid);
            let text;
            if(username === undefined){
                text = `Chào mừng bạn đến page của chúng tôi, rất vui được trả lời những thắc mắc từ bạn`;
            } else {
                text = `Chào mừng ${username} đến page của chúng tôi, rất vui được trả lời những thắc mắc từ bạn`;
            }
            let response1 = { "text":  text}
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

let sendMainMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        let text;
        try {
            let username = await homepageServices.getFacebookUsername(sender_psid);
            if(username === undefined){
                text = "Bạn muốn hỏi về cái gì:";
            } else {
                text = username + " ơi, bạn muốn hỏi về cái gì:";
            }
            console.log('username', username);
            let response = {
                "text": text,
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
            await sendMessage(sender_psid, response);
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
    sendProducts: sendProducts,
    sendServices: sendServices,
    sendSolution: sendSolution,
    sendAboutCompany: sendAboutCompany,
    sendAboutMe: sendAboutMe,
    sendMainMenu: sendMainMenu
};