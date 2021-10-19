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

            if(userInfo['health'] <= 50){
                natural();  // 자연착취엔딩
            }
            culture();      // 문화엔딩
            school();       // 환경지킴이 학교 엔딩
            home();         // 청지기 가정 엔딩
            
            select = selectOne(eventList);   // 최종 리스트 중에 하나 선택
            
            console.log(select);
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
                    // pass
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
                    // pass
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
            // pass
        }
    }else if(userInfo['day']>=8){  // 8일차 ~
        if(endingInfo['envDay'] == 0){  // 한번도 1단계 발생한적 X
            // pass  //(환경지킴이 엔딩 소멸)
        }else if(endingInfo['envDay'] != 0){  // 한번이라도 1단계 발생한적 O

            if(endingInfo['envStage'] == 0){  // 1단계 선택 X 상태
                if(userInfo['day'] < (endingInfo['envDay']+7)){ // 선택 후 1~6일째
                    // pass
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
                    // pass
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
                // pass
            }else if(userInfo['day'] == (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_35", ending: "청지기", condition: 100});  // event_35 : 청지기 1단계
            }

        }else if(endingInfo['homeStage'] == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                // pass
            }else if(userInfo['day'] == (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_36", ending: "청지기", condition: 100});  // event_36 : 청지기 2단계 - 변화하는 가정
            }

        }else if(endingInfo['homeStage'] == 2){  // (2단계 선택 O) and (3단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                // pass
            }else if(userInfo['day'] == (endingInfo['homeDay']+5)){  // 선택 후 5일째
                eventList.push({ id: "event_37", ending: "청지기", condition: 100});  // event_37 : 청지기 3단계 - 주방 세제
            }

        }else if(endingInfo['homeStage'] == 3){  // (3단계 선택 O) and (4단계 선택 X) 상태
            if(userInfo['day'] < (endingInfo['homeDay']+5)){ // 선택 후 1~4일째
                // pass
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
userRequest(); 
endingRequest(); 
ecoRequest();

