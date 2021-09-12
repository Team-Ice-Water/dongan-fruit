const dawnText = document.querySelector(".dawn").querySelector(".text");
const amText = document.querySelector(".am").querySelector(".text");
const pmText = document.querySelector(".pm").querySelector(".text");

const dawnRmv = document.querySelector(".dawn").querySelector(".remove");
const amRmv = document.querySelector(".am").querySelector(".remove");
const pmRmv = document.querySelector(".pm").querySelector(".remove");

const isFill = {
    dawn: false,
    am: false,
    pm: false,
    count: 0
}

var isVacation = false;

const volunteer = [
    {id: "worm", alt: "지렁이 봉사"},
    {id: "recycle", alt: "분리수거 봉사"},
    {id: "tree", alt: "나무심기 봉사"},
    {id: "air", alt: "대기오염 봉사"},
    {id: "sea", alt: "바다 봉사"},
    {id: "river", alt: "하천 봉사"},
    {id: "campaign", alt: "캠페인 봉사"}
]

const vacation = [
    {id: "camp", alt: "캠핑"},
    {id: "plane", alt: "비행기"},
    {id: "beach", alt: "해수욕장"}
]


var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

const item = {
    tumbler: "0",
    bicycle: "0", 
    bible: "0", 
    soap: "0"
}

// 아이템이 있어야 선택 가능한 버튼 조건 구현
function itemRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getItem.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let jkey in json) {
                for (let ikey in item) {
                    if(jkey == ikey){
                        const jvalue = json[jkey]
                        item[ikey] = jvalue
                        break
                    } 
                }
            }
        }
    };
}

itemRequest();

// 아이템이 있어야 선택할 수 있는 선택지 검사하는 함수
function needItem(tag) {
    
    if(item[tag.id] === "1"){
        select(tag, true);
    } else{
        var name = "";
        switch (tag.id) {
            case 'bible':
                name = "성경책";
                break;
            case 'tumbler':
                name = "텀블러";
                break;
            case 'bicycle':
                name = "자전거";
                break;
            case 'soap':
                name = "비누";
                break;        
            default:
                break;
        }
        alert(name+' 아이템이 있어야 선택할 수 있습니다.');
    }
}

// 현재 건강 수치로 하루에 스케쥴 3개 할 수 있는지 검사
function checkHealth() {
    var health = parseInt(document.getElementById("health").getAttribute('aria-valuenow'));
    if(health <= 50){
        if(isFill['count'] == 2){   // 체력 50 이하. 2개 채워짐
            return false;
        } 
        else{ // 체력 50 이하. 2개 이하 채워짐
            return 1;
        }
    } 
    else{   // 체력 50 초과
        return true;
    }
}

// 선택한 것에 대한 텍스트를 띄워준다
function setText(type, text) {
    const Text = document.querySelector("."+type).querySelector(".text");
    Text.innerHTML= text.alt;
    Text.setAttribute('name', text.id);
    isFill[type] = true;
    isFill['count'] += 1;
}

// 선택한 것데 대한 텍스트를 새벽 ,오전, 오후 중에 띄워준다.
function select(tag, deletable) {
    if(checkHealth()){
        if(!isFill['dawn']){    // false일 때 = 비워져있을 때
            setText("dawn", tag);
            if( deletable === false){    // 삭제불가한 이벤트면 버튼 삭제 속성 제거
                dawnRmv.setAttribute('onclick', 'nondeletable()');
            }
        }
        else if(!isFill['am']){
            setText("am", tag);
            if( deletable === false){
                amRmv.setAttribute('onclick', 'nondeletable()');
            }
        }
        else if(!isFill['pm']){
            setText("pm", tag);
            if( deletable === false){
                pmRmv.setAttribute('onclick', 'nondeletable()');
            }
        }
        else{
            alert("하루 스케쥴이 꽉 찼습니다.");
        }
    } else{
        alert("건강수치가 50 이하면 하루에 2개의 스케쥴 밖에 선택할 수 없습니다.");
    }
}

function nondeletable(){
    alert("랜덤으로 선택된 스케쥴은 삭제할 수 없습니다.");
}

function selectVolunteer() {
    if(checkHealth()){
        var jbRandom = Math.random();
        var index = Math.floor( jbRandom * 6 );
        select(volunteer[index], false);
    } else{
        alert("건강수치가 50 이하면 하루에 2개의 스케쥴 밖에 선택할 수 없습니다.");
    }
}

function selectVacation() {

    var jbRandom = Math.random();
    var index = Math.floor( jbRandom * 3 );

    if(isFill['count'] == 0){   // 다 비어있으면
        if(checkHealth() === true){    // 체력이 50 초과면, 3개 다 채움
            setText("pm", vacation[index]);
            pmRmv.setAttribute('onclick', 'nondeletable()');
        }
        // 체력 상관없이 새벽-오전 스케쥴을 같은 바캉스로 채운다.
        setText("dawn", vacation[index]);
        setText("am", vacation[index]);
        
        dawnRmv.setAttribute('onclick', 'nondeletable()');
        amRmv.setAttribute('onclick', 'nondeletable()');

        isVacation = true;
    }else{
        alert("바캉스는 모든 스케쥴이 비어있어야만 선택할 수 있습니다.");
    }

}

function remove(type){
    document.querySelector(type).querySelector(".text").innerHTML= " ";
    isFill['count'] -= 1;
    
    switch (type) {
        case ".dawn":
            isFill['dawn'] = false;
            break;
        case ".am":
            isFill['am'] = false;
            break;
        case ".pm":
            isFill['pm'] = false;
            break;
        default:
            break;
    }
}


// 결정 클릭 시, 선택된 선택지들의 id와 같은 changeValue 배열의 객체가 php에 전달됨
// 전달받은 객체의 water, health 등의 정보에 따라 DB변경
const changeValue = [
    { id: "bible", water: -2, air: -2, soil: -2, health: -1 },
    { id: "tumbler", soil: -3, health: -1 },
    { id: "foodwaste", soil: -2, health: -1 },
    { id: "bicycle", air: -4, health: -2 },
    { id: "aircon", air: -2, health: -1 },
    { id: "soap", water: -3, health: -1 },
    { id: "savewater", water: -2, health: -1 },
    { id: "worm", soil: -15, health: -10 },
    { id: "recycle", soil: -10, health: -10 },
    { id: "tree", air: -15, health: -10 },
    { id: "air", air: -10, health: -10 },
    { id: "sea", water: -15, health: -10 },
    { id: "river", water: -10, health: -10 },
    { id: "campaign", water: -5, air: -5, soil: -5, health: -10 },
    { id: "camp", soil: 10, health: 20 },
    { id: "plane", air: 10, health: 20 },
    { id: "beach", water: 10, health: 20 },
    { id: "rest", water: 2, air: 2, soil: 2, health: 5 }
]

// php에 전송
function scheduleRequest(data) {
    console.log("전송");
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            // 띄울 문구를 결과 창에 저장
            // 변동 브리핑 모달창 띄우기
            // php에서 day+1 하기 !!
        }
    };
    xhr.open('POST', '../doSchedule.php');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(data);
}

function cancel() {
    location.href="main.html";
}


function sendValue(findThis) {
    for(let value of changeValue){
        if(value['id'] == findThis){    // findThis는 선택된 것의 name 속성 (물잠그기->'savewater')
            scheduleRequest(JSON.stringify(value));
            break;
        }
    }
}

function decide() {
    const dawn = dawnText.getAttribute('name');
    const am = amText.getAttribute('name');
    const pm = pmText.getAttribute('name');
    var send;

    if(isVacation){ // 바캉스면 하나만 전송
        for(let value of changeValue){
            if( value['id'] == dawn ){
                sendValue(dawn);
                send = dawn;
            }
        }
    } else {
        sendValue(dawn);
        sendValue(am);
        send = dawn+":"+am;
        if(checkHealth() === true){ // 건강 50 이상이면
            sendValue(pm);
            //send.concat(':', pm);
            send = dawn+":"+am+":"+pm;
        }
        
    }

    location.href="briefing.html?"+send;
}