// event.js 로부터 모달의 id를 받아 이벤트 모달 내용을 채우고, 띄우는 JS

// itemInfo["basket"] == 0 // 없음
// itemInfo["basket"] == 1 // 있음
// itemInfo["basket"] == 2 // 손상된 상태
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

var today;

var interval;

// 아이템 정보 요청
function itemRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getItemInfo.php');
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
                    case 'today':
                        today = parseInt(value);
                        break; 
                    default:
                        break;
                }
            }

            for (let key in itemInfo){
                if((key != 'item_count') && (itemInfo[key] != 0)){ 
                    itemInfo['item_count']++;  
                }
            }
            // event.js에서 select(띄울 모달의 id)를 넘겨줘야 하는데 첫 실행 시점에서는 select가 없을 수도 있음.
            // 기다리면 값이 넘어옴 -> 그 때 실행해야 함 -> 반복 실행시켜둠
            let interval  = setInterval(()=>{
                if(select){
                    console.log("실행 성공!");
                    clearInterval(interval);
                    setOption(select);
                }
            }, 1000);
        }
    };
}

function setOption(choice) {
    
    console.log("event_choice.js의 setoption() 실행 ", choice);
    var evnetID;

    // 전달되는 choice는 {id: 'event_9'} 형식인 것도 있고, 문자열인 것도 있음
    if(typeof(choice) === 'object'){
        if(Object.keys(choice).includes('id')){
            evnetID = choice.id;
        }        
    } else{
        evnetID = choice;
    }

    //$('#event #event-title').text(today+"일차 이벤트: ");

    switch (evnetID) {    // choice.id 
        case 'event_1':
            // event_1
            $('#event #event-title').text(today+"일차 이벤트: 장을 보러간다.");
            $('#event #event-passage').html("오늘은 장을 보러가는 날이다. 따라가서 과자랑 아이스크림도 사달라고 해야지! </br> 장바구니 챙기라고 했는데 어디에 있더라...?");

            if(itemInfo["basket"] != 0){
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesBasket" onclick="sendUserPick(this.name)">선택지 1 (장바구니 선택하기) </button> 
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBasket" onclick="sendUserPick(this.name)">선택지 2 (그냥 나간다.) </button>`;
            }else if(itemInfo["basket"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBasket" onclick="sendUserPick(this.name)">선택지 1 (장바구니가 없다. 그냥 나간다.) </button>';
            }
            break;
    
        case 'event_2':
            // event_2
            $('#event #event-title').text(today+"일차 이벤트: 카페를 간다.");
            $('#event #event-passage').html("오늘은 친구들이랑 약속이 있는데 빡다방에서 만나야겠다! </br> 사라다 빵이랑 아이스 초코 한잔 해야지! </br> 엄마! 저 나갔다올게요!");

            if(itemInfo["tumbler"] != 0){
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesTumbler" onclick="sendUserPick(this.name);">선택지 1 (텀블러 선택하기) </button> 
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noTumbler" onclick="sendUserPick(this.name);">선택지 2 (텀블러 두고가기) </button>`;
            }else if(itemInfo["tumbler"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noTumbler" onclick="sendUserPick(this.name);">선택지 1 (가져갈 텀블러가 없다. 그냥 나간다.) </button>';
            }
            break;
    
        case 'event_3':
            // event_3 -- 선택지 검토
            $('#event #event-title').text(today+"일차 이벤트: 땀이 많이 났다.");
            $('#event #event-passage').html("하나 둘! 하나 둘! 나는 태권도 노랑띠다. </br> 빨리 검은띠가 되고 싶은 맘에 오늘도 도장에서 땀으로 흠뻑 젖을 때까지 발차기를 하고 왔다. </br> 이제 샤워를 해볼까??");
            $('#event>.modal-dialog').addClass("modal-lg");

            if(itemInfo["soap"] == 0){  // 비누 없을때 샴푸바디워시 & 물로만
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="Shampoowash" onclick="sendUserPick(this.name);">선택지 1 (바디워시, 샴푸 사용하기) </button> 
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="waterwash" onclick="sendUserPick(this.name);">선택지 2 (물로만 샤워하기) </button>`;
            }else if(itemInfo["soap"] != 0){  // 비누 있을때 비누
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="Shampoowash" onclick="sendUserPick(this.name);">선택지 1 (바디워시, 샴푸 사용하기) </button>
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="soapwash" onclick="sendUserPick(this.name);">선택지 2 (천연비누 사용하기) </button>
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="waterwash" onclick="sendUserPick(this.name);">선택지 3 (물로만 샤워하기) </button>`;
            }
            break;
    
        case 'event_4':
            // event_4
            $('#event #event-title').text(today+"일차 이벤트: 분리수거 날이다.");
            $('#event #event-passage').html("오늘은 우리 집 분리수거 날이다. </br> 이번주는 내가 분리수거 할 차례구나! 분리수거할 쓰레기가 가득하군! 빨리 갖다 버려야겠다! </br> 그런데 이게 플라스틱이야 캔이야? 헷갈리네...?");
            $('#event>.modal-dialog').addClass("modal-lg");

            if(itemInfo["book"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesBook" onclick="sendUserPick(this.name);">선택지 1 (환경지침 도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBook" onclick="sendUserPick(this.name);">선택지 2 (환경지침 도서 선택 안함) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBook" onclick="sendUserPick(this.name);">선택지 1 (환경지침 도서가 없다. 그냥 버린다.) </button>';
            }
            break;
    
        case 'event_5':
            // event_5
            $('#event #event-title').text(today+"일차 이벤트: 건강보조제");
            $('#event #event-passage').html("요즘 너무 컨디션이 안좋은걸? 공부를 열심히 해서 그런가? </br> 안되겠다. 몸 보신을 좀 해야겠다!");

            if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] != 0){  // 산삼O, 비타민O
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesGinseng" onclick="sendUserPick(this.name);">선택지 1 (최고급 산삼을 먹는다.) </button>
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesVitamin" onclick="sendUserPick(this.name);">선택지 2 (비타민을 먹는다.) </button>
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noGinsengNoVitamin" onclick="sendUserPick(this.name);">선택지 3 (먹지 않고 참는다.)</button>`;
            }else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] != 0){  // 산삼X, 비타민O
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesVitamin" onclick="sendUserPick(this.name);">선택지 1 (비타민을 먹는다.)</button>
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noGinsengNoVitamin" onclick="sendUserPick(this.name);">선택지 2 (먹지 않고 참는다.)</button>`;
            }else if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] == 0){  // 산삼O, 비타민X
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesGinseng" onclick="sendUserPick(this.name);">선택지 1 (최고급 산삼을 먹는다.)</button>
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noGinsengNoVitamin" onclick="sendUserPick(this.name);">선택지 2 (먹지 않고 참는다.)</button>`;
            }else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] == 0){  // 산삼X, 비타민X
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noGinsengNoVitamin" onclick="sendUserPick(this.name);">선택지 1 (건강보조제가 없다. 그냥 참는다.)</button>';
            }
            break;
            
        case 'event_6':
            // event_6
            $('#event #event-title').text(today+"일차 이벤트: 설거지");
            $('#event #event-passage').html("친구들과 집에서 떡볶이를 만들어 먹었다. 꿀맛이었다. </br> 헉! 싱크대를 보니 설거지가 쌓여있네..! </br> 설거지 담당 정하기 가위 바위 보를 했는데 내가 걸렸다. </br> 후훗... 고무장갑을 끼고.. 세제를 어떤거로 쓸까?");
            $('#event>.modal-dialog').addClass("modal-lg");

            if(itemInfo["soapnut"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesSoapnut" onclick="sendUserPick(this.name);">선택지 1 (소프넛 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noSoapnut" onclick="sendUserPick(this.name);">선택지 2 (소프넛 선택 안함) </button>';
            }else if(itemInfo["soapnut"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noSoapnut" onclick="sendUserPick(this.name);">선택지 1 (사용할 수 있는 소프넛이 없다. 세제를 사용한다.) </button>';
            }
            break;
    
        case 'event_7':
            // event_7
            $('#event #event-title').text(today+"일차 이벤트: 집 근처 이동");
            $('#event #event-passage').html("이제 곧 영어학원을 갈 시간이다. 걸어가기엔 좀 힘들거 같은데,,,  </br> 자전거를 타고 갈까 아니면 엄마나 아빠한테 차로 데려다달라고 할까?");

            var num = 1;
            if(itemInfo["bicycle"] != 0){   // 자전거 있으면
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesBicycle" onclick="sendUserPick(this.name);">선택지 1 (자전거 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBicycle" onclick="sendUserPick(this.name);">선택지 2 (자전거 선택 안함) </button>';                 
            }else if(itemInfo["bicycle"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBicycle" onclick="sendUserPick(this.name);">선택지 1 (타고 갈 자전거가 없다. 어쩔 수 없이 차를 탄다.) </button>';
            }    
            break;
    
        case 'event_8':
            // event_8
            $('#event #event-title').text(today+"일차 이벤트: 환경 단체 방문");
            $('#event #event-passage').html("오늘은 전도사님들과 친구들과 함께 환경 단체 견학을 가는 날이다! </br> 일정표를 한번 볼까? 모여서..음.. 먼저 예배를 하고 출발하는구나! </br> 그렇다면 성경책을 챙겨가야겠군!?");
            $('#event>.modal-dialog').addClass("modal-lg");

            if(itemInfo["bible"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesBible" onclick="sendUserPick(this.name);">선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBible" onclick="sendUserPick(this.name);">선택지 2 (성경책 선택 안함) </button>';
            }else if(itemInfo["bible"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBible" onclick="sendUserPick(this.name);">선택지 1 (성경책이 없다. 그냥 나간다.) </button>';
            } 
            break;

        case 'event_9':
            $('#event #event-title').text(today+"일차 이벤트: 친구 방문");
            $('#event #event-passage').html("(똑똑똑) </br> 생일을 맞이해서, 친구가 선물을 전해 주었어요. </br> “ 환경을 사랑하는 너에게 꼭 필요한 선물인거 같아서 준비했어 ” ");
            $('.option').html('<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesChildren" onclick="sendUserPick(this.name)">선택지 1 (선물을 받는다)</button>');
            break;

        case 'event_10':
            $('#event #event-title').text(today+"일차 이벤트: 선생님의 심방");
            $('#event #event-passage').html("(똑똑똑) </br> 교회학교 선생님이 집으로 찾아왔어요. </br> “하나님이 창조한 자연을 사랑하고 있었니?, 이게 꼭 필요할 거 같아서 가져왔단다. 선물로 줄게” ");
            $('#event>.modal-dialog').addClass("modal-lg");

            $('.option').html('<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesTeacher" onclick="sendUserPick(this.name)">선택지 1 (선물을 받는다)</button>');
            break;

        case 'event_11':
            $('#event #event-title').text(today+"일차 이벤트: 교회 전도대");
            $('#event #event-passage').html("“예수님 믿으세요~” </br> 앗 우리교회 전도대다! 나도 같이 예수님의 사랑을 전해야지! </br> “오늘 고생많았단다~ 이거 선물로 줄게”");

            $('.option').html('<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesChurch" onclick="sendUserPick(this.name)">선택지 1 (선물을 받는다)</button>');
            break;
    
        case 'event_12':
            // event_12
            $('#event #event-title').text(today+"일차 이벤트: 성경책 판매");
            $('#event #event-passage').html("(똑똑똑) </br> 성경책을 파는 아저씨가 찾아왔어요. </br> “성경책 팝니다”");

            if(itemInfo["bible"] != 0){  // 성경책 있으면 구매 X
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noBuyBible" onclick="sendUserPick(this.name);">선택지 1 (성경책 구입 안함) </button>';
            }else if(itemInfo["bible"] == 0){  // 성경책 없으면 구매 O
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesBuyBible" onclick="sendUserPick(this.name);">선택지 1 (성경책 구입하기) </button>';
            }  
            break;
    
        case 'event_13':
            $('#event #event-title').text(today+"일차 이벤트: 이웃집 방문");
            $('#event #event-passage').html("(똑똑똑) </br> 이웃집 아주머니가 찾아왔어요. </br> “우리 아이가 아토피가 심해서 그러는데 혹시 천연비누를 줄 수 있니?”");

            if(itemInfo["soap"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesGiveSoap" onclick="sendUserPick(this.name);">선택지 1 (천연비누를 주기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noGiveSoap" onclick="sendUserPick(this.name);">선택지 2 (천연비누를 주지 않음) </button>';
            }else if(itemInfo["soap"] == 0){
                console.log('비누 없음/ ', itemInfo);
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noGiveSoap" onclick="sendUserPick(this.name);">선택지 1 (천연비누가 없다. 아주머니께 천연비누가 없다고 얘기한다.) </button>';
            }
            break;
    
        case 'event_14':
            // event_14 - 검토하기
            $('#event #event-title').text(today+"일차 이벤트: 환경운동가 방문");
            $('#event #event-passage').html("(똑똑똑) </br> 초록 옷을 입은 환경운동가가 방문을 했어요.</br> “여러분 우리는 자연을 사랑해야 합니다!”");

            if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) < 130){
                // 오염수치 총합이 130미만 일 때, pollution_below130
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="pollution_below130" onclick="sendUserPick(this.name);">선택지 1 (환경운동가의 이야기를 들어본다) </button>';
            }else if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) >= 130){
                // 오염수치 총합이 130이상 일 때, pollution_above130
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="pollution_above130" onclick="sendUserPick(this.name);">선택지 1 (환경운동가의 이야기를 들어본다) </button>';
            }
            break;
    
        case 'event_15':
            $('#event #event-title').text(today+"일차 이벤트: 식목일 이벤트");
            $('#event #event-passage').html("오늘은 식목일이구나? </br> 그동안 집에서 무럭무럭 키우던 화분을 옆 동산에 심어야겠다.");

            if(itemInfo["flowerpot"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yesFlowerpot" onclick="sendUserPick(this.name);">선택지 1 (화분 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noFlowerpot" onclick="sendUserPick(this.name);">선택지 2 (화분 선택하지 않음) </button>';
            }else if(itemInfo["flowerpot"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="noFlowerpot" onclick="sendUserPick(this.name);">선택지 1 (가지고 있는 화분이 없다) </button>';
            }
            break;
    
        case 'event_16':
            // event_16
            $('#event #event-title').text(today+"일차 이벤트: 집안 대청소");
            $('#event #event-passage').html("부모님이 집안 대청소를 하자고 하시네. </br> 좋아! 나도 내 방을 청소해보자.");

            if(itemInfo['item_count'] >= 6){
                // 갖고 있는 아이템이 6개 이상이다.
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="above_6_item" onclick="sendUserPick(this.name);">선택지 1 (방 청소를 시작한다) </button>';
            }else if(itemInfo['item_count'] < 6){
                // 6개 미만, below_6_item
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="below_6_item" onclick="sendUserPick(this.name);">선택지 1 (방 청소를 시작한다) </button>';
            }
            break;

        case 'event_17':
            $('#event #event-title').text(today+"일차 이벤트: 전도사님 찬스");
            $('#event #event-passage').html("음.. 환경을 보호하기 위해서는 뭔가 더 필요할꺼같은데.. </br> 아! 전도사님이 필요할 때 전화하라 하셨어!");

            $('.option').html('<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="evangelist_chance" onclick="sendUserPick(this.name)">선택지 1 (전도사님께 전화한다)</button>');
            break;

        case 'event_18':
            // event_18 - 검토
            $('#event #event-title').text(today+"일차 이벤트: 친구들 초대");
            $('#event #event-passage').html("내일은 친구들이 집에 놀러오는 날이니, 음식을 준비해야겠다. </br> 장을 보러 마트에 가야할꺼같은데..필요한게 뭐있지?");

            if(itemInfo["basket"] != 0 && itemInfo["bicycle"] != 0){    
                // 장바구니O 자전거O
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 1 (자전거만 가져간다.) </button> 
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 2 (장바구니만 가져간다.) </button> 
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="bothBicycleBasket" onclick="sendUserPick(this.name);">선택지 3 (자전거와 장바구니 둘 다 가져간다.) </button> 
                <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="neitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 4 (자전거와 장바구니를 모두 가져가지 않는다.) </button>`;
                // 모달 크게
                $('#event>.modal-dialog').addClass("modal-lg");
            }else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] != 0){ 
                // 장바구니X 자전거O
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 1 (자전거를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="neitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 2 (자전거를 가져가지 않는다.) </button>';
            }else if(itemInfo["basket"] != 0 && itemInfo["bicycle"] == 0){
                // 장바구니O 자전거X
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 1 (장바구니를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="neitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 2 (장바구니를 가져가지 않는다.) </button>';
            }else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] == 0){
                // 장바구니X 자전거X
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="neitherBicycleBasket" onclick="sendUserPick(this.name);">선택지 1 (가져갈 수 있는 장바구니와 자전거가 없다. 빈손으로 차를 타고간다.) </button>';
                $('#event>.modal-dialog').addClass("modal-lg");
            }
            break;
    
        case 'event_19':
            // event_19 - 검토
            $('#event #event-title').text(today+"일차 이벤트: 자발적 청지기");
            $('#event #event-passage').html("하나님께서 사랑하는 자연이 깨끗해 지기 위해서 내가 실천할 수 있는 것은 무엇이 있을까? </br> 어디서 찾아봐야하지..?");

            if(itemInfo["bible"] != 0 && itemInfo["book"] != 0){
                // 성경O 책O
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBibleBook" onclick="sendUserPick(this.name);">선택지 1 (환경지침 도서만 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBibleBook" onclick="sendUserPick(this.name);">선택지 2 (성경책만 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="bothBibleBook" onclick="sendUserPick(this.name);">선택지 3 (성경책과 환경지침 도서 둘 다 선택하기) </button>';
            }else if(itemInfo["bible"] == 0 && itemInfo["book"] != 0){
                // 성경X 책O
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBibleBook" onclick="sendUserPick(this.name);" >선택지 1 (환경지침 도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="neitherBibleBook" onclick="sendUserPick(this.name);" >선택지 2 (환경지침 도서 선택하지 않음) </button>';
            }else if(itemInfo["bible"] != 0 && itemInfo["book"] == 0){
                // 성경O 책X
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="eitherBibleBook" onclick="sendUserPick(this.name);" >선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="neitherBibleBook" onclick="sendUserPick(this.name);" >선택지 2 (성경책 선택하지 않음) </button>';
            }else if(itemInfo["bible"] == 0 && itemInfo["book"] == 0){
                // 성경X 책X
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="neitherBibleBook" onclick="sendUserPick(this.name);" >선택지 1 (찾아볼 수 있는 성경책과 환경지침 도서가 없다.) </button>';
            } 
            break;

        case 'event_20':
            $('#event #event-title').text(today+"일차 이벤트: 자연 착취 이벤트 1");
            $('#event #event-passage').html("오늘은 체력이 많이 없기 때문에 에어컨을 빵빵하게 틀고 쉬어야겠다.");

            $('.option').html('<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_nature_1" onclick="sendUserPick(this.name)">선택지 1 (에어컨을 튼다.)</button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_nature_1" onclick="sendUserPick(this.name)">선택지 2 (에어컨을 틀지 않는다.)</button>');
            break;

        case 'event_21':
            $('#event #event-title').text(today+"일차 이벤트: 자연 착취 이벤트 2");
            $('#event #event-passage').html("오늘은 너무 덥다. 환경을 지키는 것도 중요하지만 내 건강이 더 중요하다. </br> 이런 상황에선 샤워를 하루에 다섯 번은 해줘야지.");

            $('.option').html('<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_nature_2" onclick="sendUserPick(this.name)">선택지 1 (샤워 하기)</button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_nature_2" onclick="sendUserPick(this.name)">선택지 2 (샤워 안하기)</button>');
            break;

        case 'event_22':
            $('#event #event-title').text(today+"일차 이벤트: 자연 착취 이벤트 3");
            $('#event #event-passage').html("아이 배고파. 일단 지금 너무 배고프니까 음식을 많이 담아야지. </br> 남으면 어쩔 수 없지.");

            $('.option').html(' <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_nature_3" onclick="sendUserPick(this.name)">선택지 1 (음식을 충분히 많이 담는다.)</button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_nature_3" onclick="sendUserPick(this.name)">선택지 2 (음식을 적당히 담는다.)</button>');
            break;
    
    
        case 'event_23':
            $('#event #event-title').text(today+"일차 이벤트: 성경책 이벤트");

            if(itemInfo["bible"] != 0){
                $('#event #event-passage').html("어휴 책상이 언제 이렇게 더러워졌지. 간만에 책상 좀 치워볼까? <br> 어! 여기 성경책이 있었네.");
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_culture_1" onclick="sendUserPick(this.name);" >선택지 1 (잘보이는 곳에 보관한다.) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_1" onclick="sendUserPick(this.name);" >선택지 2 (깊숙이 넣어두고 계속 치운다.) </button>';
            }else if(itemInfo["bible"] == 0){
                $('#event #event-passage').html("어휴 책상이 언제 이렇게 더러워졌지. 간만에 책상 좀 치워볼까?");
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_1" onclick="sendUserPick(this.name);" >선택지 1 (책상을 정리한다.) </button>';
            }
            break;
    
        case 'event_24':
            $('#event #event-title').text(today+"일차 이벤트: 전도사님 이벤트");
            $('#event #event-passage').html("자 오늘은 성경퀴즈대회를 할 거예요. 모두 성경책 준비됐죠? 없는 친구들은 프린트물을 나눠 줄게요");

            if(itemInfo["bible"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_culture_2_bible" onclick="sendUserPick(this.name);" >선택지 1 (성경책을 챙겨간다.) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_2_bible" onclick="sendUserPick(this.name);" >선택지 2 (무거우니 성경책은 두고 간다.) </button>';
            }else if(itemInfo["bible"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_2_bible" onclick="sendUserPick(this.name);" >선택지 1 (가져갈 성경책이 없다. 프린트물을 받는다.) </button>';
            }
            break;
    
        case 'event_25':
            // 문화 2단계 - 발표 
            $('#event #event-title').text(today+"일차 이벤트: 발표 이벤트");
            $('#event #event-passage').html("저번 주에 들은 하나님의 창조세계에 대해 발표해 볼 친구 있나요?");

            if(itemInfo["mic"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_culture_2_mic" onclick="sendUserPick(this.name);" >선택지 1 (발표 하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_2_mic" onclick="sendUserPick(this.name);" >선택지 2 (발표 안하기) </button>';
            }else if(itemInfo["mic"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_2_mic" onclick="sendUserPick(this.name);" >선택지 1 (발표할 마이크 아이템이 없다. 그냥 있는다.) </button>';
            }
            break;
    
        case 'event_26':
            // 문화 3단계 - 환경보호 동아리
            $('#event #event-title').text(today+"일차 이벤트: 환경보호 동아리");
            $('#event #event-passage').html("자 오늘은 동아리 활동 시간이에요. 모두 원하는 동아리를 선택해보세요.");

            if(itemInfo["book"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_culture_3_book" onclick="sendUserPick(this.name);" >선택지 1 (환경 보호 동아리를 간다.) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_3_book" onclick="sendUserPick(this.name);" >선택지 2 (환경 동아리가 아닌 다른 동아리로 간다.) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_3_book" onclick="sendUserPick(this.name);" >선택지 1 (환경지침 도서가 없으니 환경 동아리가 아닌 다른 동아리로 간다.) </button>';
            }
            break; 
    
        case 'event_27':
            // 문화 3단계 - 간식
            $('#event #event-title').text(today+"일차 이벤트: 간식");
            $('#event #event-passage').html("오늘은 선생님이 특별 간식을 준비했어요. 나와서 과자와 음료수를 받아가세요~");

            if(itemInfo["tumbler"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_culture_3_tumbler" onclick="sendUserPick(this.name);" >선택지 1 (텀블러를 챙겨간다) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_3_tumbler" onclick="sendUserPick(this.name);" >선택지 2 (텀블러를 두고간다) </button>';
            }else if(itemInfo["tumbler"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_3_tumbler" onclick="sendUserPick(this.name);" >선택지 1 (가져갈 텀블러가 없다. 그냥 간다.) </button>';
            } 
            break;
    
        case 'event_28':
            // 문화 3단계 - 자전거
            $('#event #event-title').text(today+"일차 이벤트: 자전거");
            $('#event #event-passage').html("앗 늦잠을 자버렸다! 빨리 학교 가야하는데!");

            if(itemInfo["bicycle"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_culture_3_bicycle" onclick="sendUserPick(this.name);" >선택지 1 (자전거를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_3_bicycle" onclick="sendUserPick(this.name);" >선택지 2 (빠른 자동차를 이용한다.) </button>';
            }else if(itemInfo["bicycle"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_3_bicycle" onclick="sendUserPick(this.name);" >선택지 1 (자전거 선택하지 않음) </button>';
            } 
            break;
    
        case 'event_29':
            // 문화 3단계 - 동네청소
            $('#event #event-title').text(today+"일차 이벤트: 동네청소");
            $('#event #event-passage').html("전도사님이 어딜 바쁘게 가시네. “전도사님 어디가세요?” </br> “오 반가워라. 지금 교회에서 우리 동네를 청소하러 간다고 하는데 너도 같이 갈래?");

            if(userInfo["health"] >= 70){
                document.querySelector('.option').innerHTML = `<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_culture_4" onclick="sendUserPick(this.name);" >선택지 1 (전도사님과 함께 청소한다.) </button><button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_4" onclick="sendUserPick(this.name);" >선택지 1 (좀 피곤한데.. 오늘은 그냥 집으로 간다.) </button>`;
            }else if(userInfo["health"] < 70){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_culture_4" onclick="sendUserPick(this.name);" >선택지 1 (체력이 부족하다. 집으로 간다.) </button>';
            }
            break;
    
        case 'event_30':
            // 환경지킴이 1단계 - 친구들과 환경지침도서
            $('#event #event-title').text(today+"일차 이벤트: 친구들과 환경지침도서");
            $('#event #event-passage').html("환경지침도서라는게 있다고? 그거 꼭 필요한 중요한 책 같은데... 친구들과 같이 읽었으면 좋겠다.");

            if(itemInfo["book"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_env_1_children" onclick="sendUserPick(this.name);" >선택지 1 (환경지침 도서를 가지러 간다.)</button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_env_1_children" onclick="sendUserPick(this.name);" >선택지 2 (환경지침 도서를 가지러 가지 않는다.)</button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_env_1_children" onclick="sendUserPick(this.name);" >선택지 1 (보여줄 수 있는 환경지침 도서가 없다)</button>';
            }
            break;
    
        case 'event_31':
            // 환경지킴이 1단계 - 선생님과 환경지침도서
            $('#event #event-title').text(today+"일차 이벤트: 선생님과 환경지침도서");
            $('#event #event-passage').html("환경지침도서라는게 있다고? 그거 꼭 필요한 중요한 책 같은데... 선생님께 내용을 물어볼까?");

            if(itemInfo["book"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 1 (선생님께 여쭤본다.) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 2 (혼자 찾아본다.) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 1 (나한테는 환경지침도서가 없네!) </button>';
            }
            break;
        
        case 'event_32':
            // 환경지킴이 1단계 - 도서실에 환경지침도서
            $('#event #event-title').text(today+"일차 이벤트: 도서실에 환경지침도서");
            $('#event #event-passage').html("환경지침도서라는게 있다고? 그거 꼭 필요한 중요한 책 같은데... 도서실에는 있나??");

            if(itemInfo["book"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="yes_env_1_library" onclick="sendUserPick(this.name);" >선택지 1 (환경지침도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 2 (환경지침도서 선택 안함) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="no_env_1_library" onclick="sendUserPick(this.name);" >선택지 1 (환경지침도서 선택 안함) </button>';
            } 
            break;
    
        case 'event_33':
            // 환경지킴이 2단계 - 환경 물품 기부
            $('#event #event-title').text(today+"일차 이벤트: 환경 물품 기부");
            $('#event #event-passage').html("앗! 학교에서 환경지킴 이벤트를 진행하네? 환경을 지키기 위해 필요한 물건을 모으고 있구나. 나는 무엇을 줄 수 있을까?");

            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["tumbler"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_tumbler" onclick="sendUserPick(this.name);" >선택지 '+num+' (텀블러 선택하기)</button>';
                num++;
            }
            if(itemInfo["bicycle"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_bicycle" onclick="sendUserPick(this.name);" >선택지 '+num+' (자전거 선택하기)</button>';
                num++;
            }
            if(itemInfo["soap"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_soap" onclick="sendUserPick(this.name);" >선택지 '+num+' (천연비누 선택하기)</button>';
            }
            
            if((itemInfo["tumbler"] == 0) && (itemInfo["bicycle"] == 0) && (itemInfo["soap"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_nothing" onclick="sendUserPick(this.name);" >선택지 1 (줄 수 있는 물건이 없다.)</button>';
            } else {
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>'
            }
    
            document.querySelector('.option').innerHTML = btnTxt;
            break;
    
        case 'event_34':
            // 환경지킴이 2단계 - 화장실 리모델링
            $('#event #event-title').text(today+"일차 이벤트: 화장실 리모델링");
            $('#event #event-passage').html("우리의 힘으로 우리 학교를 환경 지킴이 학교로 변화시켜보자! 먼저 화장실부터 바꿔볼까?");

            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["soapnut"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_2_soapnut" onclick="sendUserPick(this.name);" >선택지 '+num+' (소프넛 선택하기)</button>';
                num++;
            }
            if(itemInfo["soap"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_2_soap" onclick="sendUserPick(this.name);" >선택지 '+num+' (천연비누 선택하기)</button>';
                num++;
            }
            if(itemInfo["basket"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_2_basket" onclick="sendUserPick(this.name);" >선택지 '+num+' (장바구니 선택하기)</button>';
            }
            
            if((itemInfo["soapnut"] == 0) && (itemInfo["soap"] == 0) && (itemInfo["basket"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_2_nothing" onclick="sendUserPick(this.name);" >선택지 1 (화장실에 사용할 아이템이 없다.)</button>';
            } else{
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="env_2_2_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>';
            }
    
            document.querySelector('.option').innerHTML = btnTxt;
            break;
    
        case 'event_35':
            // 청지기 1단계 - 부모님 설득
            $('#event #event-title').text(today+"일차 이벤트: 부모님 설득");
            $('#event #event-passage').html("전도사님은 나뿐만 아니라 우리 가정도 하나님의 청지기가 되어야 한다고 하셨어! </br> 내가 우리 가정을 하나님의 청지기다운 가정으로 바꾸어봐야겠다!");
            $('#event>.modal-dialog').addClass("modal-lg");

            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["bible"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_1_bible" onclick="sendUserPick(this.name);" >선택지 '+num+' (성경책 선택하기)</button>';
                num++;
            }
            if(itemInfo["book"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_1_book" onclick="sendUserPick(this.name);" >선택지 '+num+' (환경지침 도서 선택하기)</button>';
                num++;
            }
            
            if((itemInfo["bible"] == 0) && (itemInfo["book"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_1_nothing" onclick="sendUserPick(this.name);" >선택지 1 (설득에 사용할 아이템이 없다.)</button>';
            } else{
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_1_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>';
            }
    
            document.querySelector('.option').innerHTML = btnTxt;
            break;

        case 'event_36':
            // 청지기 2단계 - 변화하는 가정
            $('#event #event-title').text(today+"일차 이벤트: 변화하는 가정");
            $('#event #event-passage').html("부모님이 무언가 결단하신 표정으로 나에게 오셨다. 무슨 일이지?");

            $('.option').html('<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_2_yesTalk" onclick="sendUserPick(this.name)">선택지 1 (부모님과 대화한다.)</button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_2_noTalk" onclick="sendUserPick(this.name)">선택지 2 (부모님과 대화하지 않는다.)</button>');
            break;
    
        case 'event_37':
            // 청지기 3단계 - 주방세제
            $('#event #event-title').text(today+"일차 이벤트: 주방세제");
            $('#event #event-passage').html("부모님이 주방세제는 환경에 좋지 않으니 좋은 방법이 없냐고 물어보신다.");

            if(itemInfo["soapnut"] != 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_3_yesSoapnut" onclick="sendUserPick(this.name);" >선택지 1 (소프넛 선택하기) </button> <button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_3_noSoapnut" onclick="sendUserPick(this.name);" >선택지 2 (소프넛 선택하지 않음) </button>';
            }else if(itemInfo["soapnut"] == 0){
                document.querySelector('.option').innerHTML = '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_3_noSoapnut" onclick="sendUserPick(this.name);" >선택지 1 (소프넛 선택하지 않음) </button>';
            }    
            break;
    
        case 'event_38':
            // 청지기 4단계 - 앞장서는 부모님
            $('#event #event-title').text(today+"일차 이벤트: 앞장서는 부모님");
            $('#event #event-passage').html("부모님께서 주변 이웃들에게도 자발적 불편함을 알려주려고 하신다. 어떻게 하면 부모님을 도와드릴 수 있을까?");

            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["bicycle"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_4_bicycle" onclick="sendUserPick(this.name);" >선택지 '+num+' (자전거 선택하기)</button>';
                num++;
            }
            if(itemInfo["tumbler"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_4_tumbler" onclick="sendUserPick(this.name);" >선택지 '+num+' (텀블러 선택하기)</button>';
                num++;
            }
            if(itemInfo["book"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_4_envbook" onclick="sendUserPick(this.name);" >선택지 '+num+' (환경지침 도서 선택하기)</button>';
            }
            
            if((itemInfo["tumbler"] == 0) && (itemInfo["bicycle"] == 0) && (itemInfo["book"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_4_nothing" onclick="sendUserPick(this.name);" >선택지 1 (드릴 수 있는 물건이 없다.)</button>';
            } else {
                btnTxt += '<button type="button" class="list-group-item list-group-item-action list-group-item-light" name="keeper_4_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>'
            }
    
            document.querySelector('.option').innerHTML = btnTxt;
            break;
    
    
        default:
            console.log('switch문에 안걸림');
            break;
    }

    // 모달 내용을 만들었으면, 자동으로 띄운다.
    showModal();
}

function showModal() {
    var eventModal = new bootstrap.Modal(document.getElementById('event'), {
        keyboard: false
    });
    setTimeout(() => {
        eventModal.show();
        console.log("이벤트 모달 띄움.");
        $('.schedule.btn').removeClass('disabled');
        $('.schedule.btn').removeAttr('aria-disabled');
    }, 2000);
}


itemRequest();