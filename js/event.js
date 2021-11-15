// Todo & Question
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
    health: 0,
    event_day: 0
}

var ecoLevelInfo = {
    air: 0,
    soil: 0,
    water: 0
}

var userReq = false;
var endingReq = false;
var ecoReq = false;

var select; // event_choice.js 에 보낼 변수

// 메인 코드 -> event_choice.js로 어떤 모달을 만들지 id를 보내주는 함수
function makeModal() {
    console.log("오늘날짜: ", userInfo.day);
    console.log("이벤트 날짜: ", userInfo.event_day);

    if(userReq && endingReq && ecoReq){ // 정보를 다 받아왔으면 실행함
        if(userInfo.day > userInfo.event_day){ // 아직 이벤트를 하지 않았으면
            console.log("select 보낸다."); 
            
            console.log("endingInfo: ", endingInfo);
            console.log("userInfo: ", userInfo);

            if(userInfo['health'] <= 50){
                natural();  // 자연착취엔딩
            }
            culture();      // 문화엔딩
            school();       // 환경지킴이 학교 엔딩
            home();         // 청지기 가정 엔딩
            
            console.log("makeModal()의 list: ", eventList);
            select = selectOne(eventList);   // 최종 리스트 중에 하나 선택
            
            console.log(select);
            if(!select){
                alert("오류가 발생하여 이벤트를 띄울 수 없습니다. 페이지를 새로고침 해주세요.");
            }
        } else{ // 이미 이벤트 했으면 스케쥴 버튼 누를 수 있게
            $('.schedule.btn').removeClass('disabled');
            $('.schedule.btn').removeAttr('aria-disabled');
        }
    }    
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
                    case 'event_day':
                        userInfo['event_day'] = parseInt(value);
                        break;             
                    default:
                        break;
                }
            }

            userReq = true;
            makeModal();
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

            endingReq = true;
            makeModal();
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

            ecoReq = true;
            makeModal();
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
                // pass;
            }
        }
    }else if(userInfo['day']>=7){  // 7일차 ~
        if(endingInfo['culDay'] == 0){  // 한번도 1단계 발생한적 X
            // pass;  //(문화 엔딩 소멸)
        }else if(endingInfo['culDay'] != 0){  // 한번이라도 1단계 발생한적 O

            if(endingInfo['culStage'] == 0){  // 1단계 선택 X 상태
                eventList.push({ id: "event_23", ending: "문화"});  // event_23 : 문화 1단계

            }else if(endingInfo['culStage'] == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
                if(userInfo['day'] < (endingInfo['culDay']+5)){ // 선택 후 1~4일째
                    // pass
                }else if(userInfo['day'] >= (endingInfo['culDay']+5)){  // 선택 후 5일째
                    var order = Math.floor(Math.random() * 2);
                    console.log("문화1단계 선택 후 5일째, ", order);
                    if(order == 0){
                        eventList.push({ id: "event_24", ending: "문화", condition: 100});  // event_24 : 문화 2단계 - 전도사님
                    }else if(order == 1){
                        eventList.push({ id: "event_25", ending: "문화", condition: 100});  // event_25 : 문화 2단계 - 발표
                    }
                }

            }else if(endingInfo['culStage'] == 2){  // (2단계 선택 O) 상태 and (3단계 선택 X) 상태
                if(userInfo['day'] < (endingInfo['culDay']+5)){ // 선택 후 1~4일째
                    // pass
                }else if(userInfo['day'] >= (endingInfo['culDay']+5)){  // 선택 후 5일째

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
                    // pass
                }else if(userInfo['day'] >= (endingInfo['culDay']+5)){  // 선택 후 5일째
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
            // pass
        }
    }else if(userInfo['day']>=8){  // 8일차 ~
        if(endingInfo['envDay'] == 0){  // 한번도 1단계 발생한적 X
            // pass  //(환경지킴이 엔딩 소멸)(4~7일차에 1단계 등장이기 때문)
            
        }else if(endingInfo['envDay'] != 0){  // 한번이라도 1단계 발생한적 O

            if(endingInfo['envStage'] == 0){  // 1단계 선택 X 상태
                if(userInfo['day'] < (endingInfo['envDay']+7)){ // 선택 후 1~6일째
                    // pass
                }else if(userInfo['day'] >= (endingInfo['envDay']+7)){  // 선택 후 7일째

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
                    // pass
                }else if(userInfo['day'] >= (endingInfo['envDay']+7)){  // 선택 후 7일째

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
                // pass
            }else if(userInfo['day'] >= (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_35", ending: "청지기", condition: 100});  // event_35 : 청지기 1단계
            }

        }else if(endingInfo['homeStage'] == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                // pass
            }else if(userInfo['day'] >= (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_36", ending: "청지기", condition: 100});  // event_36 : 청지기 2단계 - 변화하는 가정
            }

        }else if(endingInfo['homeStage'] == 2){  // (2단계 선택 O) and (3단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                // pass
            }else if(userInfo['day'] >= (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_37", ending: "청지기", condition: 100});  // event_37 : 청지기 3단계 - 주방 세제
            }

        }else if(endingInfo['homeStage'] == 3){  // (3단계 선택 O) and (4단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                // pass
            }else if(userInfo['day'] >= (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_38", ending: "청지기", condition: 100});  // event_38 : 청지기 4단계 - 앞장서는 부모님
            }
        }
    } 
}

var prob_100_list = [];
var prob_other_list = [];
var probability_list = [];
var prob_no_list = [];
var selected_id;

function selectOne(list) {

    // 가중치를 적용한 확률 ->  랜덤수로 확률을 뽑은 후, 누적 확률값을 사용한다.
    /* 
            1 event_1 , w: 5                                1 event_1 , w: 5
            2 event_2, w: 5                                 2 event_2, w: 5
            ..                  =확률이 작은 것부터 정렬=>
            11 event_31, w: 30                              12 event_32, w: 30
            12 event_32, w: 20                              11 event_31, w: 20
        */
        // 랜덤수로 72가 나왔다면, 
        // 1은 5<72 이므로 탈락, 2도 5+5<72이므로 탈락.. 10도 50 <72 이므로 탈락
        // 12(11번째)도 70<72 이므로 탈락, 마지막의 11이 선택된다.
    var length = list.length;
    
    var prob_length = 0;
    var no_prob_length = 0;

    var ending_weight = 0;          // 엔딩 이벤트들이 뜰 확률 (각각 나눠가질 것)
    var random_weight = 0;
    var prob_100 = false;           // 100% 등장인 이벤트가 있는지?

    for (let i = 0; i < list.length; i++) {
        if ("ending" in list[i]){
            if("condition" in list[i]){
                // 등장 확률 조건을 가진 원소가 있으면,
                // 엔딩 이벤트 전체 가중치가 달라짐
                if(list[i]["condition"] == 100){
                    ending_weight = 0;
                    random_weight = 0;
                    prob_100 = true;
                } else{
                    ending_weight = 70 - list[i]["condition"];
                    random_weight = random_weight - list[i]["condition"];
                }                
            } else{
                ending_weight = 70;
            }
            prob_length++;
        }else{
            no_prob_length++;
        }
    }

    console.log("for문 이후 ending_weight/ random_weight: "+ ending_weight + " / "+random_weight);
    if(!prob_100){     // 조건 중 100%인게 없으면
        random_weight = 100 - ending_weight + random_weight;    // random_weight는 -조건 값을 가지고 있음.
        // random_weight = 100 - 엔딩확률 - 조건확률
    }
    console.log("random_weight: ", random_weight);

    var sorted_list = [];
    for (let i = 0; i < list.length; i++) {
        if ("ending" in list[i]){
            if("condition" in list[i]){
                sorted_list.push({...list[i], weight: list[i]["condition"]});
            } else{
                sorted_list.push({...list[i], weight: ending_weight / prob_length});
            }
        }else{
            sorted_list.push({...list[i], weight: random_weight / no_prob_length});
        }
    }

    sorted_list = sorted_list.sort(function (a, b) {    // 가중치 작은 순으로 정렬
        return a.weight - b.weight;
    });

    console.log("가중치 추가, 정렬된 새 리스트: ", sorted_list);

    var rand_num = Math.floor(Math.random() * 101) +1;
    console.log("rand_num: ", rand_num);

    var cumulative = 0;

    for(var i=0; i<length; i++){
        cumulative += sorted_list[i]["weight"];
        console.log("누적 확률: ", cumulative);
        if(rand_num <= cumulative){
            return sorted_list[i]["id"];
        }
    }

    /*  테스트용 10000번 반복 코드
    for (let k = 0; k < 10000; k++) {
        var rand_num = Math.floor(Math.random() * 100);

        var cumulative = 0;

        for(var i=0; i<length; i++){
            cumulative += sorted_list[i]["weight"];
            if(rand_num <= cumulative){
                sorted_list[i]["num"]++;
                break;
            }
        }
        
    }

    for (let k = 0; k < sorted_list.length; k++) {
        sorted_list[k]["num"] = sorted_list[k]["num"]/10000;
    }

    console.log(sorted_list);
     */
}

/* JS로딩 시 실행시키는 부분 */
// DB로부터 정보 불러옴
userRequest(); 
endingRequest(); 
ecoRequest();