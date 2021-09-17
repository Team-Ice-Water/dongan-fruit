// event.js 의 일부분 (event.html에서 조건에 따라 선택지 띄우기)

// TODO
// 추후에 합치기 or 하나의 html에 두개의 js 연결 (이럴 경우 DB 연결은 ?)
// .innerHTML 사용시 덮어쓰기 되는 부분 해결
// .innerHTML 사용시 붙여야하는지
// event.html에서 선택지 부분 div id 수정
// event_getInfo.js 지워도 되는지?


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
    tumbler: 0,  // 텀블러
    flowerpot: 0,  // 화분
    mic: 0,  // 마이크
    basket: 0,  //장바구니
    book: 0,  // 환경지침도서
    vitamin: 0,  // 비타민
    bicycle: 0,  // 자전거
    bible: 0,   // 성경책
    soap: 0,   // 천연비누
    soapnut: 0,   // 소프넛
    ginseng: 0  // 최고급 산삼
}

// event_1
if(itemInfo["basket"] != 0){
    document.getElementById('option_1').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="yesBasket">선택지 1 (장바구니 선택)</button>
}else if(itemInfo["basket"] == 0){
    document.getElementById('option_1').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="noBasket">선택지 1 (장바구니 선택 안함)</button>
}

// event_2
if(itemInfo["tumbler"] != 0){
    document.getElementById('option_2').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="yesTumbler">선택지 1 (텀블러 선택)</button>
}else if(itemInfo["tumbler"] == 0){
    document.getElementById('option_2').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="noTumbler">선택지 1 (텀블러 선택 안함)</button>
}

// event_3
if(itemInfo["soap"] == 0){
    document.getElementById('option_3').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="bodywashShampoo">선택지 1 (바디워시, 샴푸 사용하기)</button>
    document.getElementById('option_3').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="onlywater">선택지 2 (물로만 샤워하기)</button>
}else if(itemInfo["soap"] != 0){  // 세개가 다 나와야하는지, 비누만 나와야하는지 여쭤보기
    document.getElementById('option_3').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="bodywashShampoo">선택지 1 (바디워시, 샴푸 사용하기)</button>
    document.getElementById('option_3').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="soap">선택지 2 (천연비누 사용하기)</button>
    document.getElementById('option_3').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="onlywater">선택지 3 (물로만 샤워하기)</button>
}

// event_4
if(itemInfo["book"] != 0){
    document.getElementById('option_4').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="yesBook">선택지 1 (환경지침도서 선택하기)</button>
}else if(itemInfo["book"] == 0){
    document.getElementById('option_4').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="noBook">선택지 1 (환경지침도서 선택안함)</button>
}

// event_5
if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] != 0){
    document.getElementById('option_5').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="yesGinseng">선택지 1 (최고급 산삼을 먹는다.)</button>
    document.getElementById('option_5').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="yesVitamin">선택지 2 (비타민을 먹는다.)</button>
}else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] != 0){
    document.getElementById('option_5').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="yesVitamin">선택지 1 (비타민을 먹는다.)</button>
}else if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] == 0){
    document.getElementById('option_5').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="yesGinseng">선택지 1 (최고급 산삼을 먹는다.)</button>
}else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] == 0){
    document.getElementById('option_5').innerHTML = <button type="button" class="list-group-item list-group-item-action" name="noGinsengNoVitamin">선택지 1 (둘 다 선택 안함)</button>      
}
       



                            
