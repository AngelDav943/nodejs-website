/*
function getCookie(cookie, name) {
    if ( cookie == undefined || cookie.replace(/ /g, "") == "") return ""
    if ( cookie.includes(name+"=") == false || name == "") return ""
    var result = cookie.slice(cookie.indexOf(name))
    if (result.includes(";")) result = result.slice(0, result.indexOf(";"))
    result = result.split("=")
    return result[result.length-1]
}
*/

const cookies = require(`${__dirname}/../../cookies.js`)

//let theme = web_getCookie(req.headers.cookie, "theme")
//if (theme == "silly") base = fs.readFileSync(`${__dirname}/../../templates/silly.html`).toString()

let nickname = cookies.getCookie(req.headers.cookie, "nickname")
other["usertop"] = nickname == undefined ? "<a href='__rooturl/login'>Login</a>" : nickname
other["nickname"] = nickname == undefined ? "Guest" : nickname