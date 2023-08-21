$(function(){

    $('#savebutton').click(function(){
        dict = {'min':$("#min").val(), 'max':$("#max").val(), 'ticker':$("#ticker").val()}
        $.each(dict, function(key, value){
            if (value === "" || value === null){
                delete dict[key];
            }
        });
        chrome.storage.local.set(dict)
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
        });
        
    });

});