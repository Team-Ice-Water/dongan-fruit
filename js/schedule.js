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

var isDawnFill = false;     // 스케쥴이 차있으면 true
var isAmFill = false;
var isPmFill = false;

function select(tag) {
    if(!isDawnFill){    // false일 때 = 비워져있을 때
        dawnText.innerHTML= tag.alt;
        dawnText.setAttribute('name', tag.id);
        isDawnFill = true;
    }
    else if(!isAmFill){
        amText.innerHTML= tag.alt;
        amText.setAttribute('name', tag.id);
        isAmFill = true;
    }
    else if(!isPmFill){
        pmText.innerHTML= tag.alt;
        pmText.setAttribute('name', tag.id);
        isPmFill = true;
    }
    else{
        alert("하루 스케쥴이 꽉 찼습니다.")
    }
}

function selectVac() {
    if(!isDawnFill && !isAmFill){
        if(!isPmFill){
            random(vacation)
            dawnText.setAttribute('name', tag.id);
            isDawnFill = true;
            amText.setAttribute('name', tag.id);
            isAmFill = true;
            pmText.setAttribute('name', tag.id);
            isPmFill = true;
        }
    }
}

function remove(type){
    if(type == "all"){
        dawnText.innerHTML= " ";
        amText.innerHTML= " ";
        pmText.innerHTML= " ";
    }
    else{
        document.querySelector(type).querySelector(".text").innerHTML= " ";
    }
    
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
        case "all":
            isDawnFill = false;
            isAmFill = false;
            isPmFill = false;
            break;  
        default:
            break;
    }
}

function decide() {
    console.log('결정')
    /*getAttribute('name')*/
}
