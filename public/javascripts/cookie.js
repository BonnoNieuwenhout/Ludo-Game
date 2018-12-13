function setCookie(cname, value){
    var d = 0;
    document.cookie = cname + value;
}

function getCookie(cname){
    var name = cname; + "="
    var cookie = decodeURIComponent(document.cookie);
    var ca = cookie.split(";")
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
  }
  return "";
}

var visits = setCookie('visits', 0);
var oldValue = Cookies.get('visits');
Cookies.set('my-cookie', ++oldValue);