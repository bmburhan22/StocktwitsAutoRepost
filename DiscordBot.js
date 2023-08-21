function sendMessage(request, authToken, postURL, textMessage){
    request.open("POST", postURL);  
    request.setRequestHeader("authorization", authToken);
    request.setRequestHeader("accept", "/");
    request.setRequestHeader("authority", "discordapp.com");
    request.setRequestHeader("content-type", "application/json");
    request.send(JSON.stringify({ content: (textMessage) }));
}

request = new XMLHttpRequest();
request.withCredentials = true;

chrome.storage.local.get(['authToken', 'textMessage', 'postURL', 'hours'], function(r) {
    setInterval(function(){
        chrome.storage.local.get('enabled', data => {
            if (data.enabled) {sendMessage(request, r.authToken, r.postURL, r.textMessage)
                var cd = new Date();
                var datetime = cd.getDate() + "/" + (cd.getMonth()+1)  + "/" + cd.getFullYear() + " " + cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds();
                chrome.storage.local.set({'datetime':'Last Message: '+datetime})}});
    }, Math.ceil(parseFloat(r.hours)*60*60+0.01)*1000);

});