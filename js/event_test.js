// Todo & Question
// event_choice에서 event_14, event_16 조건 부분 수정하기 

console.log("event_test 열림");
/* 조건이 없는 기본 19개의 이벤트를 저장하는 초기 리스트 */
var eventList = [
    // 객체(Object) 형식으로 안해도 되지만, 엔딩과 연결되는 다른 이벤트는 객체 형식이어야 하기때문에 통일
    // 다른 정보가 필요하면 각 원소에 추가해도 됨
    { id: "event_1"},    // { id: "장보기"}
    { id: "event_2"},    // { id: "카페가기"}
    { id: "event_3"},    // { id: "샤워하기"}
    { id: "event_4"},    // { id: "분리수거"}
    { id: "event_5"},    // { id: "건강보조제"}
    { id: "event_6"},    // { id: "설거지"}
    { id: "event_7"},    // { id: "집근처 이동"}
    { id: "event_8"},    // { id: "환경 단체의 방문"}
    { id: "event_9"},    // { id: "친구의 방문"}
    { id: "event_10"},   // { id: "선생님의 심방"}
    { id: "event_11"},   // { id: "교회 전도대"}
    { id: "event_12"},   // { id: "성경책 판매원 방문"}
    { id: "event_13"},   // { id: "이웃집 방문"}
    { id: "event_14"},   // { id: "환경 운동가 방문"}
    { id: "event_15"},   // { id: "식목일"}
    { id: "event_16"},   // { id: "집안 대청소"}
    { id: "event_17"},   // { id: "전도사님 찬스"}
    { id: "event_18"},   // { id: "친구들 초대"}
    { id: "event_19"},   // { id: "자발적 청지기"}
]

var endingInfo = {
    // 문화를 바꿔가는 그리스도인 엔딩
    culDay: 0,
    culStage: 0,
    // 우리 학교는 환경지킴이 엔딩
    envDay: 0,
    envStage: 0,
    // 청지기 가정 엔딩
    homeDay: 0,
    homeStage: 0
}

var userInfo = {
    day: 0,
    health: 0
}

var itemInfo = {
    tumbler: 0,
    flowerpot: 0,
    mic: 0,
    basket: 0,
    book: 0, 
    vitamin: 0,
    bicycle: 0, 
    bible: 0, 
    soap: 0, 
    soapnut: 0, 
    ginseng: 0,
    item_count: 0
}

var ecoLevelInfo = {
    air: 0,
    soil: 0,
    water: 0
}


// 건강, 날짜 등 캐릭터 정보 요청
function userRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getUserInfo.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let key in json) {
                const value = json[key];
                switch (key) {
                    case 'day':
                        userInfo['day'] = parseInt(value);
                        break;
                    case 'health':
                        userInfo['health'] = parseInt(value);
                        break;             
                    default:
                        break;
                }
            }
        }
    };
}

// 엔딩 정보 요청
function endingRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getEndingInfo.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let key in json) {
                const value = json[key];
                switch (key) {
                    case 'culDay':
                        endingInfo['culDay'] = parseInt(value);
                        break;
                    case 'culStage':
                        endingInfo['culStage'] = parseInt(value);
                        break; 
                    case 'envDay':
                        endingInfo['envDay'] = parseInt(value);
                        break;
                    case 'envStage':
                        endingInfo['envStage'] = parseInt(value);
                        break; 
                    case 'homeDay':
                        endingInfo['homeDay'] = parseInt(value);
                        break;
                    case 'homeStage':
                        endingInfo['homeStage'] = parseInt(value);
                        break;             
                    default:
                        break;
                }
            }
        }
    };
}

// 아이템 정보 요청
function itemRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getItem.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);
            for (let key in json) {
                const value = json[key];
                switch (key) {
                    case 'tumbler':
                        itemInfo['tumbler'] = parseInt(value);
                        break;
                    case 'flowerpot':
                        itemInfo['flowerpot'] = parseInt(value);
                        break;    
                    case 'mic':
                        itemInfo['mic'] = parseInt(value);
                        break;
                    case 'basket':
                        itemInfo['basket'] = parseInt(value);
                        break;     
                    case 'book':
                        itemInfo['book'] = parseInt(value);
                        break;
                    case 'vitamin':
                        itemInfo['vitamin'] = parseInt(value);
                        break; 
                    case 'bicycle':
                        itemInfo['bicycle'] = parseInt(value);
                        break;
                    case 'bible':
                        itemInfo['bible'] = parseInt(value);
                        break; 
                    case 'soap':
                        itemInfo['soap'] = parseInt(value);
                        break;
                    case 'soapnut':
                        itemInfo['soapnut'] = parseInt(value);
                        break; 
                    case 'ginseng':
                        itemInfo['ginseng'] = parseInt(value);
                        break; 
                    default:
                        break;
                }
            }

            for (let key in itemInfo){
                if(itemInfo[key] != 0){ 
                    itemInfo['item_count']++;  
                }
            }
        }
    };
}
// 오염도 정보 요청
function ecoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getEcoLevel.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let key in json) {
                const value = json[key];
                switch (key) {
                    case 'air':
                        ecoLevelInfo['air'] = parseInt(value);
                        break;
                    case 'soil':
                        ecoLevelInfo['soil'] = parseInt(value);
                        break;  
                    case 'water':
                        ecoLevelInfo['water'] = parseInt(value);
                        break;            
                    default:
                        break;
                }
            }
        }
    };
}

/* JS로딩 시 실행시키는 부분 */
// DB로부터 정보 불러옴
userRequest(); endingRequest(); itemRequest(); ecoRequest();

// modal 버튼의 속성값 변경
var select="";

function setTarget(tag) {
    
    console.log(tag);  
    select = tag.value;

    $(".event-modal").text(tag.text);
    const modalBtn = document.querySelector(".event-modal");
    modalBtn.setAttribute('data-bs-target', "#"+select);  // selectOne()의 값을 저장하는 변수

    console.log(tag.text);
    console.log(select);

    setting(select);
}
