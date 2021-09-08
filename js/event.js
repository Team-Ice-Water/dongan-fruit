/* 조건이 없는 기본 14개의 이벤트를 저장하는 초기 리스트 */
var eventList = [
    // 객체(Object) 형식으로 안해도 되지만, 엔딩과 연결되는 다른 이벤트는 객체 형식이어야 하기때문에 통일
    // 다른 정보가 필요하면 각 원소에 추가해도 됨
    { id: "장보러간다"},    // { id: "evnet_1"}
    { id: "카페를 간다"},   // { id: "evnet_2"}
    { id: "땀이 많이 났다"},
    ...
    
]

var endingInfo = [  // DB로부터 가져와서 초기값을 그거에 맞게 바꿔줄거임
    {ending: "문화", stage: 0, day: 0},
    {ending: "환경지킴이", stage: 0, day: 0},
    {ending: "청지기", stage: 0, day: 0},
]

function probability(원하는 확률) { // 원하는 확률에 따라 true 반환하는 함수
    if(확률 계산){
        return true
    } else {
        return false
    }
}

function natural() { // 자연착취 이벤트
    if(probability(20)){
        eventList.push({ id: "자연착취1"});
    }
    if(probability(20)){
        eventList.push({ id: "자연착취2"});
    }
    if(probability(20)){
        eventList.push({ id: "자연착취3"});
    }
}

/* 문화를 바꿔가는 그리스도인 엔딩 */
function culture() {
    if( 성경책stage == 0){
        if( 현재 날짜 3일 이상 ){
            if(probability(60)){
                eventList.push({ id: "성경책"ending: "문화"});
            }
        }
    }
    else if(성경책stage == 1){
        if(오늘날짜 == (성경책day +5)){
            eventList.push({ id: "전도사님", ending: "문화"}); 
            또는
            eventList.push({ id: "발표", ending: "문화"});
        }
    }
    ...
}

/* 우리 학교는 환경지킴이 엔딩 */
function school() {
    ...
}

/* 청지기 가정 엔딩 */
function home() {
    ...
}


function selectone(list) {
    ...
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