url = 'https://stocktwits.com/symbol/'

const sleep = ms => new Promise(resolve=>setTimeout(resolve, ms))
const scroll = async () => {
    for (i=0;i<6;i++){
        document.scrollingElement.scrollTop=document.scrollingElement.scrollHeight;
        await sleep(3000);
}
}

// const goToPage = async (r) =>{
//     min_interval = parseInt(r.min);
//     max_interval = parseInt(r.max);
//     sleeptime = Math.ceil(Math.random() * (max_interval-min_interval) + min_interval)
//     window.location = url+r.ticker;    
//     document.getElementsByClassName('st_25t4LaW st_jGV698i st_2HqScKh st_PLa30pM st_1jzr122 st_1x3QBA7 st_eEYmrVC st_vmBJz6-')[0].click();
//     postsbody = document.evaluate('//*[@id="app"]/div/div/div[3]/div[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     document.body.innerHTML='';
//     document.body.append(postsbody);
//     postindex = Math.ceil(Math.random() * (80 - 30) + 30);
//     scroll();
//     if (document.getElementsByTagName('article')[postindex].getElementsByTagName('a')[2]['href']){
//     window.location =  document.getElementsByTagName('article')[postindex].getElementsByTagName('a')[2]['href'];}   
//     // await sleep(sleeptime*60000) 
// }

chrome.storage.local.get(['ticker', 'min', 'max'], function(r){
    min_interval = parseInt(r.min);
    max_interval = parseInt(r.max);
    sleeptime = Math.ceil(Math.random() * (max_interval-min_interval) + min_interval)
    console.log('Sleeptime: '+sleeptime);
    window.location = url+r.ticker; 
    // setTimeout(function(){       
    document.getElementsByClassName('st_25t4LaW st_jGV698i st_2HqScKh st_PLa30pM st_1jzr122 st_1x3QBA7 st_eEYmrVC st_vmBJz6-')[0].click();
    postsbody = document.getElementsByClassName('st_gIQ1cL6 st_2-AYUR9')[0];
    document.body.innerHTML='';
    document.body.append(postsbody);
    postindex = Math.ceil(Math.random() * (80 - 30) + 30);
    scroll();
    if (document.getElementsByTagName('article')[postindex].getElementsByTagName('a')[2]['href']){
    window.location =  document.getElementsByTagName('article')[postindex].getElementsByTagName('a')[2]['href'];}   
// },10000)
}
);

//for (e of a.getElementsByClassName('st_1H1PshU st_1SuHTwr')){
// if (!
//     (e.textContent.startsWith('$') || e['href'].startsWith('https://stocktwits.com/topic/')||
//     e['href'].startsWith('https://stocktwits.com/') & e.textContent.startsWith('@'))
// )
//     {e.textContent = e['href'];}}
// console.log(a.getElementsByClassName('st_3SL2gug')[0].textContent);