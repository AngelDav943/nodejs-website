const cookies = require(`${__dirname}/../../cookies.js`)
const nickname_cookie = cookies.getCookie(req.headers.cookie, "nickname")
const nickname = req.query.nickname

new page.loader({
    "res": res,
    "req": req,
    "title": "Login test",
    "content": `${__dirname}/../../pages/login.html`,
    "other": {
        "currentnickname": nickname_cookie == undefined ? "" : nickname_cookie
    }
}).load()

console.log(nickname, nickname == "")
if (nickname != undefined && String(nickname).replace(/ /g,"") != "")
{
    let new_nickname = cookies.setCookie(req.headers.cookie, "nickname", nickname != undefined ? nickname : "")
    res.send(`<script>document.cookie = "${new_nickname}"; window.location = "${page.url }";</script>`)
}