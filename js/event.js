/* 조건이 없는 기본 14개의 이벤트를 저장하는 초기 리스트 */
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
    { id: "event_35"}    // { id: "청지기 1단계"}  
]

var endingInfo = [  // DB로부터 가져와서 초기값을 그거에 맞게 바꿔줄거임
    {ending: "문화", stage: 0, day: 0},
    {ending: "환경지킴이", stage: 0, day: 0},
    {ending: "청지기", stage: 0, day: 0},
]

function probability(prob) { // 원하는 확률에 따라 true 반환하는 함수
    if(확률계산){
        return true
    } else {
        return false
    }
}

function natural() { // 자연착취 이벤트
    eventList.push({ id: "event_20", condition: 20});  // { id: "자연착취 1"}  
    eventList.push({ id: "event_20", condition: 20});  // { id: "자연착취 2"}  
    eventList.push({ id: "event_20", condition: 20});  // { id: "자연착취 3"}  
}

/* 문화를 바꿔가는 그리스도인 엔딩 */
function culture() {

    if(day>= 3 && day<=6){  // 3~6일차
        if(culDay == 0){  // 문화 1단계 발생한적 X
            eventList.push({ id: "event_23", ending: "문화", condition: 60});  // event_23 : 문화 1단계
        }else if(culDay != 0){  // 한번이라도 문화 1단계 발생한적 O
            if(culStage == 0){  // 문화 1단계 선택 X
                eventList.push({ id: "event_23", ending: "문화"});
            }else if(culStage == 1){  // 문화 1단계 선택 O (아직 5일 안지난 상태)
                pass
            }
        }
    }else if(day>=7){  // 7일차 ~
        if(culDay == 0){  // 한번도 1단계 발생한적 X
            pass  //(문화 엔딩 소멸)
        }else if(culDay != 0){  // 한번이라도 1단계 발생한적 O

            if(culStage == 0){  // 1단계 선택 X 상태
                eventList.push({ id: "event_23", ending: "문화"});

            }else if(culStage == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
                if(day < (culDay+5)){ // 선택 후 1~4일째
                    pass
                }else if(day == (culDay+5)){  // 선택 후 5일째
                    eventList.push({ id: "event_23", ending: "문화", condition: 100});  // event_24 : 문화 2단계 - 전도사님
                    eventList.push({ id: "event_24", ending: "문화", condition: 100});  // event_25 : 문화 2단계 - 발표
                }

            }else if(culStage == 2){  // (2단계 선택 O) 상태 and (3단계 선택 X) 상태
                if(day < (culDay+5)){ // 선택 후 1~4일째
                    pass
                }else if(day == (culDay+5)){  // 선택 후 5일째
                    eventList.push({ id: "event_26", ending: "문화", condition: 100});  // event_26 : 문화 3단계 - 환경보호 동아리
                    eventList.push({ id: "event_27", ending: "문화", condition: 100});  // event_27 : 문화 3단계 - 간식
                    eventList.push({ id: "event_28", ending: "문화", condition: 100});  // event_28 : 문화 3단계 - 자전거
                }

            }else if(culStage == 3){  // (3단계 선택 O) 상태
                if(day < (culDay+5)){ // 선택 후 1~4일째
                    pass
                }else if(day == (culDay+5)){  // 선택 후 5일째
                    eventList.push({ id: "event_29", ending: "문화", condition: 100});  // event_29 : 문화 4단계 - 동네청소
                }
            }
        }    
    }else{  // 1~2일차
        pass
    }

}

/* 우리 학교는 환경지킴이 엔딩 */
function school() {
    if(day>= 4 && day<=7){  // 4~7일차
        if(envDay == 0){  // 환경지킴이 1단계 발생한적 X
            eventList.push({ id: "event_30", ending: "환경지킴이"});  // event_30 : 환경지킴이 1단계 - 친구들과
            eventList.push({ id: "event_31", ending: "환경지킴이"});  // event_31 : 환경지킴이 1단계 - 선생님과
            eventList.push({ id: "event_32", ending: "환경지킴이"});  // event_32 : 환경지킴이 1단계 - 도서실에
        }else if(envDay != 0){  // 한번이라도 환경지킴이 1단계 발생한적 O
            pass
        }
    }else if(day>=8){  // 8일차 ~
        if(envDay == 0){  // 한번도 1단계 발생한적 X
            pass  //(환경지킴이 엔딩 소멸)
        }else if(envDay != 0){  // 한번이라도 1단계 발생한적 O

            if(envStage == 0){  // 1단계 선택 X 상태
                if(day < (envDay+7)){ // 선택 후 1~6일째
                    pass
                }else if(day == (envDay+7)){  // 선택 후 7일째
                    eventList.push({ id: "event_30", ending: "환경지킴이", condition: 100});  // event_30 : 환경지킴이 1단계 - 친구들과
                    eventList.push({ id: "event_31", ending: "환경지킴이", condition: 100});  // event_31 : 환경지킴이 1단계 - 선생님과
                    eventList.push({ id: "event_32", ending: "환경지킴이", condition: 100});  // event_32 : 환경지킴이 1단계 - 도서실에
                }            

            }else if(envStage == 1){  // (1단계 선택 O) and (2단계 선택 X) 상태
                if(day < (envDay+7)){ // 선택 후 1~6일째
                    pass
                }else if(day == (envDay+7)){  // 선택 후 7일째
                    eventList.push({ id: "event_33", ending: "환경지킴이", condition: 100});  // event_33 : 환경지킴이 2단계 - 환경 물품 기부
                    eventList.push({ id: "event_34", ending: "환경지킴이", condition: 100});  // event_34 : 환경지킴이 2단계 - 화장실 리모델링
                }
            }
        }    
    }
}

/* 청지기 가정 엔딩 */
function home() {
    ...
}


function sendInfo(list) {
    for (let i = 0; i < list.length; i++) {    // 배열 원소 순회
        for (let key in obj) {              // 각 배열의 원소인 객체 순회
            if( key == "condition"){        // 원소가 조건이라는 데이터를 가지면,
                const probability = obj[key];   // probability는 그 이벤트가 얼마의 등장 확률을 가지는지를 저장
                // 확률 처리 (이것만 주어진 확률 만큼 등장하게)
            }
    }
    ....
    return list 중에 하나의 원소
}



/* JS로딩 시 실행시키는 부분 */
if( 체력50이하 ){
    natural();  // 자연착취엔딩
}
culture();      // 문화엔딩
school();       // 환경지킴이 학교 엔딩
home();         // 청지기 가정 엔딩

selectOne(eventList);   // 최종 리스트 중에 하나 선택



/* 하나 선택된 이후의 과정 */
function sendInfo(list) {
    // php에 정보를 보냄 (=DB 변경)
}

// 만약 선택된 이벤트가 문화면.. 
// 선택 여부에 따라 stage는 달라지니, 정보를 보내서 다른 JS 파일에서 처리해도 됨
if( endingInfo['ending'] == '문화'){
    endingInfo['day'] = 오늘day;
    if( 선택했으면 ){
        endingInfo['stage'] += 1;
    }
    sendInfo(endingInfo);
}