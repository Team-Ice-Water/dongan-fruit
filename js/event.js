// Todo & Question

// infoRequest(); endingRequest(); itemRequest(); ecoRequest(); 내용 검토 및 함수 호출 해야하는지?
// event_choice.js 내용 여기에 합치기 or 따로 분리? (하나의 event.html에 둘다 연결해야함)
// event_getInfo.js 지워도 되는지? 
// event.html에서 선택지 부분 div id 수정해도 되는지?
// event.js과 event.html 연결 확인 (html에 script 태그로 추가해서 실행하면 바뀌는데, js로 실행하면 안되는 것 해결)
// event_choice에서 event_14, event_16 조건 부분 수정하기 


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
    ginseng: 0
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

function natural() { // 자연착취 이벤트

    var natural_order = Math.floor(Math.random() * 3);
    
    if(natural_order == 0){
        eventList.push({ id: "event_20", condition: 20});  // event_20 : 자연 착취 1
    }else if(natural_order == 1){
        eventList.push({ id: "event_21", condition: 20});  // event_21 : 자연 착취 2
    }else if(natural_order == 2){
        eventList.push({ id: "event_22", condition: 20});  // event_22 : 자연 착취 3
    }    
}

/* 문화를 바꿔가는 그리스도인 엔딩 */
function culture() {
    if(userInfo['day']>= 3 && userInfo['day']<=6){  // 3~6일차
        if(endingInfo['culDay'] == 0){  // 문화 1단계 발생한적 X
            eventList.push({ id: "event_23", ending: "문화", condition: 60});  // event_23 : 문화 1단계

        }else if(endingInfo['culDay'] != 0){  // 한번이라도 문화 1단계 발생한적 O
            if(endingInfo['culStage'] == 0){  // 문화 1단계 선택 X
                eventList.push({ id: "event_23", ending: "문화"});
            }else if(endingInfo['culStage'] == 1){  // 문화 1단계 선택 O (아직 5일 안지난 상태)
                pass
            }
        }
    }else if(userInfo['day']>=7){  // 7일차 ~
        if(endingInfo['culDay'] == 0){  // 한번도 1단계 발생한적 X
            pass  //(문화 엔딩 소멸)
        }else if(endingInfo['culDay'] != 0){  // 한번이라도 1단계 발생한적 O

            if(endingInfo['culStage'] == 0){  // 1단계 선택 X 상태
                eventList.push({ id: "event_23", ending: "문화"});  // event_23 : 문화 1단계

            }else if(endingInfo['culStage'] == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
                if(userInfo['day'] < (endingInfo['culDay']+5)){ // 선택 후 1~4일째
                    pass
                }else if(userInfo['day'] == (endingInfo['culDay']+5)){  // 선택 후 5일째
                    var order = Math.floor(Math.random() * 2);

                    if(order == 0){
                        eventList.push({ id: "event_24", ending: "문화", condition: 100});  // event_24 : 문화 2단계 - 전도사님
                    }else if(order == 1){
                        eventList.push({ id: "event_25", ending: "문화", condition: 100});  // event_25 : 문화 2단계 - 발표
                    }
                }

            }else if(endingInfo['culStage'] == 2){  // (2단계 선택 O) 상태 and (3단계 선택 X) 상태
                if(userInfo['day'] < (endingInfo['culDay']+5)){ // 선택 후 1~4일째
                    pass
                }else if(userInfo['day'] == (endingInfo['culDay']+5)){  // 선택 후 5일째

                    var order = Math.floor(Math.random() * 3);

                    if(order == 0){
                        eventList.push({ id: "event_26", ending: "문화", condition: 100});  // event_26 : 문화 3단계 - 환경보호 동아리
                    }else if(order == 1){
                        eventList.push({ id: "event_27", ending: "문화", condition: 100});  // event_27 : 문화 3단계 - 간식
                    }else if(order == 2){
                        eventList.push({ id: "event_28", ending: "문화", condition: 100});  // event_28 : 문화 3단계 - 자전거
                    }
                }

            }else if(endingInfo['culStage'] == 3){  // (3단계 선택 O) and (4단계 선택 X) 상태
                if(userInfo['day'] < (endingInfo['culDay']+5)){ // 선택 후 1~4일째
                    pass
                }else if(userInfo['day'] == (endingInfo['culDay']+5)){  // 선택 후 5일째
                    eventList.push({ id: "event_29", ending: "문화", condition: 100});  // event_29 : 문화 4단계 - 동네청소
                }
            }
        }    
    }
}

/* 우리 학교는 환경지킴이 엔딩 */
function school() {
    if(userInfo['day']>= 4 && userInfo['day']<=7){  // 4~7일차
        if(endingInfo['envDay'] == 0){  // 환경지킴이 1단계 발생한적 X

            var order = Math.floor(Math.random() * 3);

            if(order == 0){
                eventList.push({ id: "event_30", ending: "환경지킴이"});  // event_30 : 환경지킴이 1단계 - 친구들과
            }else if(order == 1){
                eventList.push({ id: "event_31", ending: "환경지킴이"});  // event_31 : 환경지킴이 1단계 - 선생님과
            }else if(order == 2){
                eventList.push({ id: "event_32", ending: "환경지킴이"});  // event_32 : 환경지킴이 1단계 - 도서실에
            }

        }else if(endingInfo['envDay'] != 0){  // 한번이라도 환경지킴이 1단계 발생한적 O
            pass
        }
    }else if(userInfo['day']>=8){  // 8일차 ~
        if(endingInfo['envDay'] == 0){  // 한번도 1단계 발생한적 X
            pass  //(환경지킴이 엔딩 소멸)
        }else if(endingInfo['envDay'] != 0){  // 한번이라도 1단계 발생한적 O

            if(endingInfo['envStage'] == 0){  // 1단계 선택 X 상태
                if(userInfo['day'] < (endingInfo['envDay']+7)){ // 선택 후 1~6일째
                    pass
                }else if(userInfo['day'] == (endingInfo['envDay']+7)){  // 선택 후 7일째

                    var order = Math.floor(Math.random() * 3);

                    if(order == 0){
                        eventList.push({ id: "event_30", ending: "환경지킴이"});  // event_30 : 환경지킴이 1단계 - 친구들과
                    }else if(order == 1){
                        eventList.push({ id: "event_31", ending: "환경지킴이"});  // event_31 : 환경지킴이 1단계 - 선생님과
                    }else if(order == 2){
                        eventList.push({ id: "event_32", ending: "환경지킴이"});  // event_32 : 환경지킴이 1단계 - 도서실에
                    }
                }            

            }else if(endingInfo['envStage'] == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
                if(userInfo['day'] < (endingInfo['envDay']+7)){ // 선택 후 1~6일째
                    pass
                }else if(userInfo['day'] == (endingInfo['envDay']+7)){  // 선택 후 7일째

                    var order = Math.floor(Math.random() * 2);

                    if(order == 0){
                        eventList.push({ id: "event_33", ending: "환경지킴이", condition: 100});  // event_33 : 환경지킴이 2단계 - 환경 물품 기부
                    }else if(order == 1){
                        eventList.push({ id: "event_34", ending: "환경지킴이", condition: 100});  // event_34 : 환경지킴이 2단계 - 화장실 리모델링
                    }   
                }
            }
        }    
    }
}

/* 청지기 가정 엔딩 */
function home() {
    if(endingInfo['homeDay'] == 0){  // 한번도 1단계 발생한적 X
        eventList.push({ id: "event_35", ending: "청지기"});  // event_35 : 청지기 1단계
    }else if(endingInfo['homeDay'] != 0){  // 한번이라도 1단계 발생한적 O

        if(endingInfo['homeStage'] == 0){  // (1단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                pass
            }else if(userInfo['day'] == (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_35", ending: "청지기", condition: 100});  // event_35 : 청지기 1단계
            }

        }else if(endingInfo['homeStage'] == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                pass
            }else if(userInfo['day'] == (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_36", ending: "청지기", condition: 100});  // event_36 : 청지기 2단계 - 변화하는 가정
            }

        }else if(endingInfo['homeStage'] == 2){  // (2단계 선택 O) and (3단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                pass
            }else if(userInfo['day'] == (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_37", ending: "청지기", condition: 100});  // event_37 : 청지기 3단계 - 주방 세제
            }

        }else if(endingInfo['homeStage'] == 3){  // (3단계 선택 O) and (4단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                pass
            }else if(userInfo['day'] == (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_38", ending: "청지기", condition: 100});  // event_38 : 청지기 4단계 - 앞장서는 부모님
            }
        }
    } 
}

var prob_100_list = []
var prob_other_list = []
var probability_list = []
var prob_no_list = []

function selectOne(list) {
    for (let i = 0; i < list.length; i++) {    // 배열 원소 순회
        if ("condition" in list[i]){           // "condition" key가 존재하는 원소인지 판단
            for (let key in list[i]) {         // 객체 순회 (key)
                if( key == "condition"){       // 객체가 "condition"이라는 데이터를 가지면,
                    const probability = list[i][key];   // probability는 그 이벤트가 얼마의 등장 확률을 가지는지를 저장
                    
                    /* 확률 처리 */
                    // push() 메서드는 배열의 끝에 요소를 추가하고, 배열의 새로운 길이를 반환함
                    // 객체의 id를 list에 저장하면서 list의 원소 개수 update
    
                    if(probability == 100){  // probability가 100일때
                        prob_100_list.push(list[i]["id"])  
                    }else if(0 < probability < 100){  // 100 아닌 probability
                        prob_other_list.push(list[i]["id"])
                        probability_list.push(probability)
                    }
                }
            }
        }else{                                // "condition" key가 존재하지 않는 객체
            prob_no_list.push(list[i]["id"])
        }
    }

    /* 확률 처리 */
    if(prob_other_list.length == 1){  // 다른 확률 가지는 원소 한개 (20% 또는 60%)

        const rand_0_99 = Math.floor(Math.random() * 100);
        switch (true) {
            case rand_0_99 < probability_list[0]:  // (20% 또는 60%)
                selected_id = prob_other_list[0]
                break;
            case rand_0_99 >= probability_list[0]:
                selected_id = prob_no_list[Math.floor(Math.random() * prob_no_list.length)]
                break;
        }
    }else if(prob_other_list.length == 2){  // 다른 확률 가지는 원소 두개 (20%, 60%)

        const rand_0_99 = Math.floor(Math.random() * 100);
        switch (true) {
            case rand_0_99 < probability_list[0]:  // 20%
                selected_id = prob_other_list[0]
                break;
            case rand_0_99 >= probability_list[0] && rand_0_99 < probability_list[1]:  // 20% ~ 60%
                selected_id = prob_other_list[1]
                break;
            case rand_0_99 >= probability_list[1]:  // 60% ~
                selected_id = prob_no_list[Math.floor(Math.random() * prob_no_list.length)]
                break;
        }
    }


    if (prob_100_list.length > 1){             // 100% 확률 가지는 원소가 여러개
        return prob_100_list[Math.floor(Math.random() * prob_100_list.length)];    // 100% 확률 가지는 원소 중 랜덤 선택해서 반환
    }else if(prob_100_list.length == 1){       // 100% 확률 가지는 원소가 한개
        return prob_100_list[0];
    }else if((prob_100_list.length == 0) && (prob_other_list.length != 0)){   // 100% 확률 가지는 원소가 없음 & 다른 확률 가지는 원소 존재
        return selected_id;
    }else if((prob_100_list.length == 0) && (prob_other_list.length == 0)){   // 100% 확률 가지는 원소가 없음 & 다른 확률 가지는 원소 없음
        return list[Math.floor(Math.random() * list.length)];    // 초기 list에서 랜덤 선택해서 반환
    }
}

/* JS로딩 시 실행시키는 부분 */
// DB로부터 정보 불러옴
userRequest(); endingRequest(); itemRequest(); ecoRequest();


if(userInfo['health'] <= 50){
    natural();  // 자연착취엔딩
}
culture();      // 문화엔딩
school();       // 환경지킴이 학교 엔딩
home();         // 청지기 가정 엔딩

const select = selectOne(eventList);   // 최종 리스트 중에 하나 선택

// modal 버튼의 속성값 변경
const modalBtn= document.querySelector(".btn");
modalBtn.setAttribute('data-bs-target', "#"+select);  // selectOne()의 값을 저장하는 변수임

console.log(select)

/*
// event_choice.js 내용 (테스트용)

// event_1
if(itemInfo["basket"] != 0){
    document.querySelector('.option_1').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBasket">선택지 1 (장바구니 선택하기) </button>';
}else if(itemInfo["basket"] == 0){
    document.querySelector('.option_1').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBasket">선택지 1 (장바구니 선택 안함) </button>';
}
// event_2
if(itemInfo["tumbler"] != 0){
    document.querySelector('.option_2').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesTumbler">선택지 1 (텀블러 선택하기) </button>';
}else if(itemInfo["tumbler"] == 0){
    document.querySelector('.option_2').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noTumbler">선택지 1 (텀블러 선택 안함) </button>';
}

// event_3 -- 선택지 검토
if(itemInfo["soap"] == 0){  // 비누 없을때 샴푸바디워시 & 물로만
    document.querySelector('.option_3').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="Shampoowash">선택지 1 (바디워시, 샴푸 사용하기) </button>';
    document.querySelector('.option_3').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="waterwash">선택지 2 (물로만 샤워하기) </button>');
}else if(itemInfo["soap"] != 0){  // 비누 있을때 비누
    document.querySelector('.option_3').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="soapwash">선택지 1 (천연비누 사용하기) </button>';
}

// event_4
if(itemInfo["book"] != 0){
    document.querySelector('.option_4').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBook">선택지 1 (환경지침도서 선택하기) </button>';
}else if(itemInfo["book"] == 0){
    document.querySelector('.option_4').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBook">선택지 1 (환경지침도서 선택 안함) </button>';
}

// event_5
if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] != 0){  // 산삼O, 비타민O
    document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesGinseng">선택지 1 (최고급 산삼을 먹는다.) </button>';
    document.querySelector('.option_5').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="yesVitamin">선택지 2 (비타민을 먹는다.) </button>');
}else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] != 0){  // 산삼X, 비타민O
    document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesVitamin">선택지 1 (비타민을 먹는다.)</button>';
}else if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] == 0){  // 산삼O, 비타민X
    document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesGinseng">선택지 1 (최고급 산삼을 먹는다.)</button>';
}else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] == 0){  // 산삼X, 비타민X
    document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noGinsengNoVitamin">선택지 1 (둘 다 선택 안함)</button>';
}
       
// event_6
if(itemInfo["soapnut"] != 0){
    document.querySelector('.option_6').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesSoapnut">선택지 1 (소프넛 선택하기) </button>';
}else if(itemInfo["soapnut"] == 0){
    document.querySelector('.option_6').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noSoapnut">선택지 1 (소프넛 선택 안함) </button>';
}

// event_7
if(itemInfo["bicycle"] != 0){
    document.querySelector('.option_7').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBicycle">선택지 1 (자전거 선택하기) </button>';                            
}else if(itemInfo["bicycle"] == 0){
    document.querySelector('.option_7').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBicycle">선택지 1 (자전거 선택 안함) </button>';
}                            

// event_8
if(itemInfo["bible"] != 0){
    document.querySelector('.option_8').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBible">선택지 1 (성경책 선택하기) </button>';
}else if(itemInfo["bible"] == 0){
    document.querySelector('.option_8').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBible">선택지 1 (성경책 선택 안함) </button>';
}   

// event_12
if(itemInfo["bible"] != 0){  // 성경책 있으면 구매 X
    document.querySelector('.option_12').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBuyBible">선택지 1 (성경책 구입 안함) </button>';
}else if(itemInfo["bible"] == 0){  // 성경책 없으면 구매 O
    document.querySelector('.option_12').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBuyBible">선택지 1 (성경책 구입하기) </button>';
}   

// event_13 - 검토하기
if(itemInfo["soap"] != 0){
    document.querySelector('.option_13').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesGiveSoap">선택지 1 (천연비누를 주기) </button>';
}else if(itemInfo["soap"] == 0){
    document.querySelector('.option_13').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noGiveSoap">선택지 1 (천연비누를 주지 않음) </button>';
}      


// event_14 - 검토하기
if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) < 130){
    document.querySelector('.option_14').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="pollution_below130">선택지 1 (오염수치 총합이 130미만 일 때) </button>';
}else if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) >= 130){
    document.querySelector('.option_14').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="pollution_above130">선택지 1 (오염수치 총합이 130이상 일 때) </button>';
}

// event_15
if(itemInfo["flowerpot"] != 0){
    document.querySelector('.option_15').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesFlowerpot">선택지 1 (화분 선택하기) </button>';
}else if(itemInfo["flowerpot"] == 0){
    document.querySelector('.option_15').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noFlowerpot">선택지 1 (화분 선택하지 않음) </button>';
}

var item_count = 0;

for (let key in itemInfo){
    if(itemInfo[key] != 0){       
        item_count = item_count + 1;  
    }
}

// event_16
if(item_count >= 6){
    document.querySelector('.option_16').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="above_6_item">선택지 1 (갖고 있는 아이템이 6개 이상일 경우) </button>';
}else if(item_count < 6){
    document.querySelector('.option_16').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="below_6_item">선택지 1 (갖고 있는 아이템이 6개 미만일 경우) </button>';
}   
               
// event_18 - 검토
if(itemInfo["basket"] != 0 && itemInfo["bicycle"] != 0){
    document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="bothBicycleBasket">선택지 1 (자전거와 장바구니 둘다 선택하기) </button>';
}else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] != 0){
    document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket">선택지 1 (자전거만 선택하기) </button>';
}else if(itemInfo["basket"] != 0 && itemInfo["bicycle"] == 0){
    document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket">선택지 1 (장바구니만 선택하기) </button>';
}else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] == 0){
    document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket">선택지 1 (둘다 선택하지 않음) </button>';
}    

// event_19 - 검토
if(itemInfo["bible"] != 0 && itemInfo["book"] != 0){
    document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="bothBibleBook">선택지 1 (성경책과 환경지침도서 둘 다 선택하기) </button>';
}else if(itemInfo["bible"] == 0 && itemInfo["book"] != 0){
    document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook">선택지 1 (환경지침만 선택하기) </button>';
}else if(itemInfo["bible"] != 0 && itemInfo["book"] == 0){
    document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook">선택지 1 (성경책만 선택하기) </button>';
}else if(itemInfo["bible"] == 0 && itemInfo["book"] == 0){
    document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="neitherBibleBook">선택지 1 (둘다 선택하지 않음) </button>';
}    

// event_23
if(itemInfo["bible"] != 0){
    document.querySelector('.option_23').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_1">선택지 1 (성경책 선택하기) </button>';
}else if(itemInfo["bible"] == 0){
    document.querySelector('.option_23').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_1">선택지 1 (성경책 선택하지 않음) </button>';
}   
// event_24
if(itemInfo["bible"] != 0){
    document.querySelector('.option_24').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_2_bible">선택지 1 (성경책 선택하기) </button>';
}else if(itemInfo["bible"] == 0){
    document.querySelector('.option_24').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_2_bible">선택지 1 (성경책 선택하지 않음) </button>';
}   
// event_25
if(itemInfo["mic"] != 0){
    document.querySelector('.option_25').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_2_mic">선택지 1 (마이크 선택하기) </button>';
}else if(itemInfo["mic"] == 0){
    document.querySelector('.option_25').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_2_mic">선택지 1 (마이크 선택하지 않음) </button>';
}   
// event_26
if(itemInfo["book"] != 0){
    document.querySelector('.option_26').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_book">선택지 1 (환경지침도서 선택하기) </button>';
}else if(itemInfo["book"] == 0){
    document.querySelector('.option_26').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_book">선택지 1 (환경지침도서 선택하지 않음) </button>';
}   
// event_27
if(itemInfo["tumbler"] != 0){
    document.querySelector('.option_27').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_tumbler">선택지 1 (텀블러 선택하기) </button>';
}else if(itemInfo["tumbler"] == 0){
    document.querySelector('.option_27').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_tumbler">선택지 1 (텀블러 선택하지 않음) </button>';
}   
// event_28
if(itemInfo["bicycle"] != 0){
    document.querySelector('.option_28').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_bicycle">선택지 1 (자전거 선택하기) </button>';
}else if(itemInfo["bicycle"] == 0){
    document.querySelector('.option_28').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_bicycle">선택지 1 (자전거 선택하지 않음) </button>';
}             
// event_29
if(userInfo["health"] >= 70){
    document.querySelector('.option_29').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_4">선택지 1 (체력이 70 이상일 때) </button>';
}else if(userInfo["health"] < 70){
    document.querySelector('.option_29').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_4">선택지 1 (체력이 70 미만일 때) </button>';
}   

// event_30
if(itemInfo["book"] != 0){
    document.querySelector('.option_30').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_children">선택지 1 (환경지침도서 선택하기)</button>';
}else if(itemInfo["book"] != 0){
    document.querySelector('.option_30').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_children">선택지 1 (환경지침도서 선택 안함)</button>';
}   
// event_31
if(itemInfo["book"] != 0){
    document.querySelector('.option_31').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_teacher">선택지 1 (환경지침도서 선택하기) </button>';
}else if(itemInfo["book"] != 0){
    document.querySelector('.option_31').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_teacher">선택지 1 (환경지침도서 선택 안함) </button>';
}   
// event_32
if(itemInfo["book"] != 0){
    document.querySelector('.option_32').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_library">선택지 1 (환경지침도서 선택하기) </button>';
}else if(itemInfo["book"] != 0){
    document.querySelector('.option_32').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_library">선택지 1 (환경지침도서 선택 안함) </button>';
}                          
// event_33
if(itemInfo["tumbler"] != 0 && itemInfo["bicycle"] != 0 && itemInfo["soap"] != 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_tumbler">선택지 1 (텀블러 선택하기)</button>';
    document.querySelector('.option_33').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_bicycle">선택지 2 (자전거 선택하기)</button>');
    document.querySelector('.option_33').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_soap">선택지 3 (천연비누 선택하기)</button>');
}else if(itemInfo["tumbler"] == 0 && itemInfo["bicycle"] != 0 && itemInfo["soap"] != 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_bicycle">선택지 1 (자전거 선택하기)</button>';
    document.querySelector('.option_33').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_soap">선택지 2 (천연비누 선택하기)</button>');
}else if(itemInfo["tumbler"] != 0 && itemInfo["bicycle"] == 0 && itemInfo["soap"] != 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_tumbler">선택지 1 (텀블러 선택하기)</button>';
    document.querySelector('.option_33').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_soap">선택지 2 (천연비누 선택하기)</button>');
}else if(itemInfo["tumbler"] != 0 && itemInfo["bicycle"] != 0 && itemInfo["soap"] == 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_tumbler">선택지 1 (텀블러 선택하기)</button>';
    document.querySelector('.option_33').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_bicycle">선택지 2 (자전거 선택하기)</button>');
}else if(itemInfo["tumbler"] != 0 && itemInfo["bicycle"] == 0 && itemInfo["soap"] == 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_tumbler">선택지 1 (텀블러 선택하기)</button>';
}else if(itemInfo["tumbler"] == 0 && itemInfo["bicycle"] != 0 && itemInfo["soap"] == 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_bicycle">선택지 1 (자전거 선택하기)</button>';
}else if(itemInfo["tumbler"] == 0 && itemInfo["bicycle"] == 0 && itemInfo["soap"] != 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_soap">선택지 1 (천연비누 선택하기)</button>';
}else if(itemInfo["tumbler"] == 0 && itemInfo["bicycle"] == 0 && itemInfo["soap"] == 0){
    document.querySelector('.option_33').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_nothing">선택지 1 (선택하지 않음) </button>';
}
// event_34
if(itemInfo["soapnut"] != 0 && itemInfo["soap"] != 0 && itemInfo["basket"] != 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soapnut">선택지 1 (소프넛 선택하기)</button>';
    document.querySelector('.option_34').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soap">선택지 2 (천연비누 선택하기)</button>');
    document.querySelector('.option_34').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_2_basket">선택지 3 (장바구니 선택하기)</button>');
}else if(itemInfo["soapnut"] == 0 && itemInfo["soap"] != 0 && itemInfo["basket"] != 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soap">선택지 1 (천연비누 선택하기)</button>';
    document.querySelector('.option_34').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_2_basket">선택지 2 (장바구니 선택하기)</button>');
}else if(itemInfo["soapnut"] != 0 && itemInfo["soap"] == 0 && itemInfo["basket"] != 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soapnut">선택지 1 (소프넛 선택하기)</button>';
    document.querySelector('.option_34').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_2_basket">선택지 2 (장바구니 선택하기)</button>');
}else if(itemInfo["soapnut"] != 0 && itemInfo["soap"] != 0 && itemInfo["basket"] == 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soapnut">선택지 1 (소프넛 선택하기)</button>';
    document.querySelector('.option_34').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soap">선택지 2 (천연비누 선택하기)</button>');
}else if(itemInfo["soapnut"] != 0 && itemInfo["soap"] == 0 && itemInfo["basket"] == 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soapnut">선택지 1 (소프넛 선택하기)</button>';
}else if(itemInfo["soapnut"] == 0 && itemInfo["soap"] != 0 && itemInfo["basket"] == 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soap">선택지 1 (천연비누 선택하기)</button>';
}else if(itemInfo["soapnut"] == 0 && itemInfo["soap"] == 0 && itemInfo["basket"] != 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_basket">선택지 1 (장바구니 선택하기)</button>';
}else if(itemInfo["soapnut"] == 0 && itemInfo["soap"] == 0 && itemInfo["basket"] == 0){
    document.querySelector('.option_34').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_nothing">선택지 1 (선택하지 않음)</button>';
}
// event_35
if(itemInfo["bible"] != 0 && itemInfo["book"] != 0){
    document.querySelector('.option_35').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_bible">선택지 1 (성경책 선택하기)</button>';
    document.querySelector('.option_35').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="keeper_1_book">선택지 2 (환경지침도서 선택하기)</button>');
}else if(itemInfo["bible"] == 0 && itemInfo["book"] != 0){
    document.querySelector('.option_35').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_book">선택지 2 (환경지침도서 선택하기)</button>';
}else if(itemInfo["bible"] != 0 && itemInfo["book"] == 0){
    document.querySelector('.option_35').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_bible">선택지 1 (성경책 선택하기)</button>';
}else if(itemInfo["bible"] == 0 && itemInfo["book"] == 0){
    document.querySelector('.option_35').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_nothing">선택지 3 (선택하지 않음)</button>';
}  
// event_37
if(itemInfo["soapnut"] != 0){
    document.querySelector('.option_37').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_3_yesSoapnut">선택지 1 (소프넛 선택하기) </button>';
}else if(itemInfo["soapnut"] != 0){
    document.querySelector('.option_37').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_3_noSoapnut">선택지 2 (소프넛 선택하지 않음) </button>';
}     
// event_38
if(itemInfo["bicycle"] != 0 && itemInfo["tumbler"] != 0 && itemInfo["book"] != 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_bicycle">선택지 1 (자전거 선택)</button>';
    document.querySelector('.option_38').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="keeper_4_tumbler">선택지 2 (텀블러 선택)</button>');
    document.querySelector('.option_38').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="keeper_4_envbook">선택지 3 (환경지침도서 선택)</button>');
}else if(itemInfo["bicycle"] == 0 && itemInfo["tumbler"] != 0 && itemInfo["book"] != 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_tumbler">선택지 2 (텀블러 선택)</button>';
    document.querySelector('.option_38').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="keeper_4_envbook">선택지 3 (환경지침도서 선택)</button>');
}else if(itemInfo["bicycle"] != 0 && itemInfo["tumbler"] == 0 && itemInfo["book"] != 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_bicycle">선택지 1 (자전거 선택)</button>';
    document.querySelector('.option_38').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="keeper_4_envbook">선택지 3 (환경지침도서 선택)</button>');
}else if(itemInfo["bicycle"] != 0 && itemInfo["tumbler"] != 0 && itemInfo["book"] == 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_bicycle">선택지 1 (자전거 선택)</button>';
    document.querySelector('.option_38').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="keeper_4_tumbler">선택지 2 (텀블러 선택)</button>');
}else if(itemInfo["bicycle"] != 0 && itemInfo["tumbler"] == 0 && itemInfo["book"] == 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_bicycle">선택지 1 (자전거 선택)</button>';
}else if(itemInfo["bicycle"] == 0 && itemInfo["tumbler"] != 0 && itemInfo["book"] == 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_tumbler">선택지 2 (텀블러 선택)</button>';
}else if(itemInfo["bicycle"] == 0 && itemInfo["tumbler"] == 0 && itemInfo["book"] != 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_envbook">선택지 3 (환경지침도서 선택)</button>';
}else if(itemInfo["bicycle"] == 0 && itemInfo["tumbler"] == 0 && itemInfo["book"] == 0){
    document.querySelector('.option_38').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_nothing">선택지 4 (선택하지 않음.)</button>';
}
/////////////////
*/


/* 하나 선택된 이후의 과정 */
function sendending(obj) {
    // php에 정보를 보냄 (=DB 변경)
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){ 
        }
    };
    xhr.open('POST', '../doEvent.php');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(JSON.stringify(obj));
}


// // 원하는 확률에 따라 true 반환하는 함수 (사용X)
// function choose_by_probability(prob) { 
//     const rand_0_99 = Math.floor(Math.random() * 100);
//     if(rand_0_99 < prob){
//         return true
//     } else {
//         return false
//     }
// }


// // 모달창에 뜬 하나의 이벤트에 관한 후처리 (수정해야함)
// ending.forEach(function (value) {
//     if((value['id'] == select) && ("ending" in value)){ // 뜬 이벤트가 엔딩 이벤트였으면 
//         switch (value['ending']) {
//             case '문화':
//                 endingInfo['culDay'] = userInfo['day'];
//                 if( 선택했으면 ){
//                     endingInfo['culStage'] += 1;
//                 }
//                 break;
    
//             case '환경지킴이':
//                 endingInfo['envDay'] = userInfo['day'];
//                 if( 선택했으면 ){
//                     endingInfo['envStage'] += 1;
//                 }
//                 break;
    
//             case '청지기':
//                 endingInfo['homeDay'] = userInfo['day'];
//                 if( 선택했으면 ){
//                     endingInfo['homeStage'] += 1;
//                 }
//                 break;
        
//             default:
//                 break;
//         }

//         sendending(ending);
//         break;
//     }
    
// })
