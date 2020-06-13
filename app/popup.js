document.addEventListener('DOMContentLoaded',()=>{
    const btn = document.getElementById("filter");
    btn.addEventListener("click",()=>{
        var updateTextTo = document.getElementById("userinput").value;
        if(updateTextTo.length<2){
            appendingText(updateTextTo);
        }
        else{
            chrome.storage.local.set({updateTextTo: updateTextTo}, function () {
                chrome.tabs.executeScript({
                    file: "app/filtering.js"
                });
            });
            appendingText(updateTextTo);
        }
    });
});

function appendingText(keyword){
    var elem = document.getElementById("key");
    if(elem!=null){
        elem.remove();
    }
    var title = document.getElementById('title');
    var newElem = document.createElement('div');
    newElem.setAttribute('id','key');
    newElem.setAttribute('style', 'color: #0073e9; font-weight:500;font-size:10pt');
    if(keyword.length<2){
        newElem.innerHTML =`필터링 키워드가 너무 짧습니다!`;
    }
    else{
        newElem.innerHTML =`필터링 키워드 \"${keyword}\" 적용 되었습니다!`;
    }
    title.appendChild(newElem);
}