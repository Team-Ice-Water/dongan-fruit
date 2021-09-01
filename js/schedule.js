/*var firstTabEl = document.querySelector('#planTab li:last-child a')
var firstTab = new bootstrap.Tab(firstTabEl)
firstTab.show()

*/
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

const dawnText = document.querySelector(".dawn").querySelector(".text");
const amText = document.querySelector(".am").querySelector(".text");
const pmText = document.querySelector(".pm").querySelector(".text");

var isDawnFill = false;
var isAmFill = false;
var isPmFill = false;

function select(text) {
    if(!isDawnFill){
        dawnText.innerHTML= text;
        isDawnFill = true;
    }
    else if(!isAmFill){
        amText.innerHTML= text;
        isAmFill = true;
    }
    else if(!isPmFill){
        pmText.innerHTML= text;
        isPmFill = true;
    }
    else{
        alert("하루 스케쥴이 꽉 찼습니다.")
    }
}

function remove(type){
    document.querySelector(type).querySelector(".text").innerHTML= " ";
    switch (type) {
        case ".dawn":
            isDawnFill = false;
            break;
        case ".am":
            isAmFill = false;
            break;
        case ".pm":
            isPmFill = false;
            break;    
        default:
            break;
    }
}

