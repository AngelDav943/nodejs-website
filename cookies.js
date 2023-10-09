module.exports = {
    getCookie(cookies, cookieName) { // Faster approach
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(cookies);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return undefined;
    },

    setCookie(cookies, cookieName, cookieValue/*, nohash*/) {
        //if (nohash == undefined) cvalue = cvalue.hashCode();
        return cookieName + "=" + cookieValue + ";path=/";
    },
}