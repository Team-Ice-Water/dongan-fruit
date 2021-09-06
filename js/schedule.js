const dawnText = document.querySelector(".dawn").querySelector(".text");
const amText = document.querySelector(".am").querySelector(".text");
const pmText = document.querySelector(".pm").querySelector(".text");

const dawnRmv = document.querySelector(".dawn").querySelector(".remove");
const amRmv = document.querySelector(".am").querySelector(".remove");
const pmRmv = document.querySelector(".pm").querySelector(".remove");

const isFill = {
    dawn: false,
    am: false,
    pm: false
}

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
        console.log('itemList: ', item);
    };
    xhr.send();
}

itemRequest();

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


function setText(type, text) {
    const Text = document.querySelector("."+type).querySelector(".text");
    Text.innerHTML= text.alt;
    Text.setAttribute('name', text.id);
    isFill[type] = true;
}

function select(tag, deletable) {
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
}

function nondeletable(){
    alert("랜덤으로 선택된 스케쥴은 삭제할 수 없습니다.");
}

function selectVolunteer() {
    var jbRandom = Math.random();
    var index = Math.floor( jbRandom * 6 );
    select(volunteer[index], false);
}

function selectVacation() {
    var jbRandom = Math.random();
    var index = Math.floor( jbRandom * 3 );

    if(!isFill['dawn'] && !isFill['am']){
        if(!isFill['pm']){
            setText("dawn", vacation[index]);
            setText("am", vacation[index]);
            setText("pm", vacation[index]);
            
            dawnRmv.setAttribute('onclick', 'nondeletable()');
            amRmv.setAttribute('onclick', 'nondeletable()');
            pmRmv.setAttribute('onclick', 'nondeletable()');
        }else{
            alert("바캉스는 모든 스케쥴이 비어있어야만 선택할 수 있습니다.")
        }
    }else{
        alert("바캉스는 모든 스케쥴이 비어있어야만 선택할 수 있습니다.")
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

function cancel() {
    location.href="main.html";
}

const changeValue = [
    {
        id: "bible",
        water: -2,
        air: -2,
        soil: -2,
        health: -1
    },
    {
        id: "tumbler",
        soil: -3,
        health: -1
    },
    {
        id: "foodwaste",
        soil: -2,
        health: -1
    },
    {
        id: "bike",
        water: -4,
        health: -2
    }
]


function scheduleRequest(data) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log('응답: ', xhr.responseText);
            // 띄울 문구를 결과 창에 저장
        }
    };
    xhr.open('POST', '../doSchedule.php');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(data);
}


function decide() {
    console.log('결정')
    const dawn = dawnText.getAttribute('name');
    const am = amText.getAttribute('name');
    const pm = pmText.getAttribute('name');
    for(let value of changeValue){
        if( value['id'] == dawn ){
            // value를 php로 전송
            scheduleRequest(JSON.stringify(value));
        } else if(value['id'] == am){
            scheduleRequest(JSON.stringify(value));
        } else if(value['id'] == pm){
            scheduleRequest(JSON.stringify(value));
        }
    }
}
