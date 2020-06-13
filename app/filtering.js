chrome.storage.local.get('updateTextTo', function (items) {
    filtering(items.updateTextTo);
    chrome.storage.local.remove('updateTextTo');
});

function filtering(keyword){
    let a = document.querySelectorAll('tbody > tr > td.title.title-align > a > span');
    a.forEach((elem,index)=>{
        if(elem.outerText.indexOf(keyword)!=-1)
            elem.parentNode.parentNode.parentNode.remove();
    });
}