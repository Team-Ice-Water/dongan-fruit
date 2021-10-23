// 선택지(버튼)에 이벤트 추가- 클릭시 마다 php로 보낼 정보를 수정함

// 모달창마다 클래스명이 다 같기 때문에 show된 모달에 대해서 적용해야 한다. 
// (클래스명이 같으면 최상위 요소에만 적용되기 때문)

var userSelect;

function sendUserPick(tagname){
    userSelect = tagname;
    console.log("this.name: ", tagname);
    
    $(".modal.show .modal-footer > .btn").removeAttr('disabled');
}


var changeEco = {
    eco: "", 
    value: 0
};     // 가장 수치가 높은 오염도의 {종류, 변동수치}
var giveItem ="";
var getItem;
var damageItem ="";

function chooseItem(haveItems) {
    var jbRandom = Math.random();
    const random = Math.floor( jbRandom * haveItems.length );
    console.log("random숫자: ", random);
    // haveItems 배열 중에 랜덤으로 하나 선택
    return haveItems[random];
}

function matchItemTxt(item) {
    switch (item) {
        case 'tumbler':
            return "텀블러";
        case 'flowerpot':
            return "화분";
        case 'mic':
            return "마이크";
        case 'bible':
            return "성경책";
        case 'basket':
            return "장바구니";
        case 'book':
            return "환경 지침 도서";
        case 'vitamin':
            return "비타민";
        case 'bicycle':
            return "자전거";
        case 'soap':
            return "천연비누";
        case 'soapnut':
            return "소프넛";
        case 'ginseng':
            return "최고급 인삼";
        default:
            break;
    }
}

function findMaxEco() {
    var max = 0;
    var maxEco = 0;
    for(let key in ecoLevelInfo){
        if(ecoLevelInfo[key] >= max){
            max = ecoLevelInfo[key];
            maxEco = key;
        }
    }
    console.log("오염수치가 젤 높은 것: ", maxEco);

    return maxEco;
}

function matchEcoTxt(max) {
    switch (max) {
        case 'air':
            var type = "대기오염";
            break;
        case 'soil':
            var type = "토양오염";
            break;
        case 'water':
            var type = "수질오염";
            break;            
        default:
            var type = "오염";
            break;
    }

    return type;
}

function random(percent) {
    const probability = (percent / 100);
    if(Math.random() < probability){
        return true;
    } else{
        return false;
    }
}

function setResultModal(choice) {
    var text = "";
    var result = "";
    switch (choice) {
        // event_1
        case 'yesBasket':
            text = "장바구니가 여기있네! 가져가야겠다.";
            result = "대기오염 3 감소, 체력 1 감소";
            break;
        case 'noBasket':
            text = "장바구니가 어디 갔는지 모르겠네.";
            result = "대기오염 5 증가, 체력 1 감소";
            break;

        // event_2
        case 'yesTumbler':
            text = "맞다! 텀블러! 항상 텀블러를 잘 갖고 다녀야지.";
            result = "토양오염 2 감소, 체력 1 감소";
            break;
        case 'noTumbler':
            text = "아! 텀블러. 에이 굳이 텀블러 가져가기 귀찮으니 그냥 가야지.";
            result = "토양오염 4 증가, 체력 1 감소";
            break;

        // event_3
        case 'Shampoowash':
            text = "깨끗하게 빨리 씻고 싶으니까 바디워시랑 샴푸를 사용해야지";
            result = "수질오염 5 증가, 체력 2 증가";
            break;
        case 'soapwash':
            text = "조금 불편해도 환경을 생각해서 천연비누를 사용하자.";
            result = "수질오염 2 감소";
            if(random(10)){
                damageItem = 'soap';
                result += ", 천연비누 손상";
            }
            break;
        case 'waterwash':
            text = "에이 다 귀찮아. 그냥 물로만 씻어야지.";
            result = "체력 2 감소";
            break;

        // event_4 분리수거
        case 'yesBook':
            text = "마침 환경 지침 도서가 있으니까 보고 제대로 하면 되겠다.";
            result = "대기오염 5 감소, 수질오염 5 감소, 토양오염 5 감소, 체력 2 감소";
            break;
        case 'noBook':
            text = "아, 모르겠다. 그냥 대충해, 대충.";
            result = "대기오염 5 증가, 수질오염 5 증가, 토양오염 5 증가";
            break;

        // event_5 건강보조제
        case 'yesGinseng':
            text = "역시 컨디션이 안좋을 땐 산삼이지! 근데 이 산삼 포장재가 너무 많이 나오긴 하네...";
            result = "대기오염 5 증가, 수질오염 5 증가, 토양오염 5 증가, 체력 10 증가";
            break;
        case 'yesVitamin':
            text = "힘들 땐 비타민을 챙겨먹어야지.";
            result = "체력 3 증가, 비타민 손상";
            damageItem = 'vitamin';
            break;
        case 'noGinsengNoVitamin':
            text = "힘들어도 그냥 참자!";
            result = "체력 2 감소";
            break;

        // event_6 설거지
        case 'yesSoapnut':
            text = "그래, 환경을 생각해서 소프넛을 써야지.";
            result = "수질오염 3 감소";
            if(random(50)){
                damageItem = 'soapnut';
                result += ", 소프넛 손상";
            }
            break;
        case 'noSoapnut':
            text = "친구들이 기다리고 있는데 주방세제를 써서 후딱 하자.";
            result = "수질오염 5 증가";
            break;

        // event_7 집 근처 이동
        case 'yesBicycle':
            text = "그래 환경도 생각하고 건강도 지킬 겸 자전거를 타자.";
            result = "대기오염 3 감소";
            break;
        case 'noBicycle':
            text = "아 오늘 날도 덥고 힘든데 그냥 차타고 가자.";
            result = "대기오염 5 증가";
            break;

        // event_8 환경단체
        case 'yesBible':
            text = "열심히 예배하는 모습에 전도사님이 대견해하시며 환경지침 도서를 주셨어!";
            result = "환경 지침 도서 획득";
            getItem = 'book';
            break;
        case 'noBible':
            text = "성경책이 어디 있는지 몰라서 못챙겼더니 예배에 집중을 못했네...";
            break;

        // event_9 친구의 방문
        case 'yesChildren':
            text = "선물을 열어보니 우와 텀블러다!";
            result = "텀블러 획득";
            getItem = 'tumbler';
            break;

        // event_10 심방
        case 'yesTeacher':
            text = "우와 선생님께서 성경책과 환경지침 도서를 주셨다!!";
            result = "성경책, 환경지침 도서 획득";
            getItem = ['bible', 'book'];
            break;

        // event_11 전도대
        case 'yesChurch':
            text = "전도대에서 성경책을 주고 가셨어.";
            result = "성경책 획득";
            getItem = 'bible';
            break;

        // event_12 판매원
        case 'noBuyBible':
            text = " 나: 저는 성경책이 이미 있어요! 안녕히가세요!! ";
            break;
        case 'yesBuyBible':
            var haveItems = [];      // 가지고 있는 아이템들의 이름을 저장하는 배열
            for (let key in itemInfo) {
                if((key !='item_count') && (itemInfo[key] == 1)){
                    haveItems.push(key);
                }
            }
            console.log("가진 아이템: ", haveItems);          
            giveItem = chooseItem(haveItems);
            text = " 나: 저.. 성경책이 없는데, 혹시 제가 가지고 있는 "+matchItemTxt(giveItem)+"(이)랑 성경책을 바꿔 주실 수 있으세요? <br> 판매원: 성경을 사랑하는 멋진 친구구나! 그래, 네가 가진 물건이랑 성경책이랑 바꾸자! ";
            result = " 성경책 획득, "+matchItemTxt(giveItem)+" 소모";
            getItem = 'bible';
            break;

        // event_13 이웃집
        case 'yesGiveSoap':
            text = "아주머니: 참 착한 아이구나! 우리집에 있는 좋은 자전거를 너에게 선물로 줄게";
            result = "천연비누 소모, 자전거 획득";
            giveItem = 'soap';
            getItem = 'bicycle';
            break;
        case 'noGiveSoap':
            text = "아주머니: 천연비누를 어디에서 구한담... <br> 아주머니가 걱정이 가득한 채로 가셨다.";
            break;

        // event_14 환경운동가
        case 'pollution_below130':
            text = "환경 운동가: 화분을 하나 가져왔어요. 앞으로도 우리 더욱 더 환경을 사랑해보자!";
            result = "화분 획득";
            getItem = 'flowerpot';
            break;
        case 'pollution_above130':
            var haveItems = [];      // 가지고 있는 아이템들의 이름을 저장하는 배열
            for (let key in itemInfo) {
                if((key != 'bible') && (key !='item_count')){      // 가진 아이템 배열에서 성경 제외
                    if(itemInfo[key] == 1){
                        haveItems.push(key);
                    }
                }                
            }
            console.log("(pollution_above130) 가진 아이템: ", haveItems);          
            giveItem = chooseItem(haveItems);
            text = "환경 운동가: 혹시 환경을 위해서 물건을 좀 기부해주지 않을래? <br> 나: 그럼 저는 "+matchItemTxt(giveItem)+"을(를) 기부할래요!";
            result = matchItemTxt(giveItem)+" 소모";
            break;

        // event_15 식목일
        case 'yesFlowerpot':
            text = "후유, 화분을 옮기느라 힘들었지만 기분도, 환경도 더 나아진 것 같아.";
            result = "대기오염 3 감소, 체력 5 감소";
            break;
        case 'noFlowerpot':
            text = "아, 집에 화분이 안보이네. 다음에 심어야겠다.";
            break;

        // event_16 대청소
        case 'above_6_item':
            var haveItems = [];
            for (let key in itemInfo) {
                if((key != 'book') && (key !='item_count')){      // 가진 아이템 배열에서 책 제외
                    if(itemInfo[key] == 1){
                        haveItems.push(key);
                    }
                }                
            }
            console.log("(above_6_item) 가진 아이템: ", haveItems);          
            giveItem = chooseItem(haveItems);
            text = "흠 쓰지 않는 물건들이 너무 많네."+matchItemTxt(giveItem)+ "을(를) 버려야겠다.";
            result = matchItemTxt(giveItem)+" 소모";
            break;

        case 'below_6_item':
            var noItems = [];      // 없는 아이템들의 이름을 저장하는 배열
            for (let key in itemInfo) {
                if((key !='item_count') && (itemInfo[key] == 0)){
                    noItems.push(key);
                }               
            }
            console.log("(below_6_item) 없는 아이템: ", noItems);          
            getItem = chooseItem(noItems);
            text = "오 청소하다가 잃어버렸던 "+matchItemTxt(getItem)+"을 찾았다! 오예";
            result = matchItemTxt(getItem)+" 획득";
            break;

        // event_17 전도사님 찬스
        case 'evangelist_chance':
            var damages = [];      // 손상된 아이템들의 이름을 저장하는 배열
            for (let key in itemInfo) {
                if((key !='item_count') && (itemInfo[key] == 2)){
                    damages.push(key);
                }               
            }

            if(damages.length == 0){
                var noItems = [];      // 없는 아이템들의 이름을 저장하는 배열
                for (let key in itemInfo) {
                    if((key !='item_count') && (itemInfo[key] == 0)){
                        noItems.push(key);
                    }               
                }
                console.log("(evangelist_chance) 없는 아이템: ", noItems);          
                getItem = chooseItem(noItems);
                result = "새로운 아이템, "+matchItemTxt(getItem)+" 획득";
                
            } else{
                console.log("(evangelist_chance) 손상되었던 아이템: ", damages);          
                getItem = chooseItem(damages);
                result = "손상되었던 "+matchItemTxt(getItem)+" 회복";
            }

            text = "전도사님이 청지기로 살아가는데 도움이 될 물건을 주셨어.";
            
            break;

        // event_18 친구들 초대
        case 'eitherBicycleBasket': // 둘 중 하나만 선택
            text = "음, 환경을 생각하긴 했는데 뭐가 빠진 것 같은데?";
            result = "대기오염 5 증가, 수질오염 5 증가, 토양오염 5 증가";
            break;
        case 'bothBicycleBasket':   // 둘 다 선택
            text = "환경을 생각하고 자전거를 타고 장바구니에 재료를 사와야지!";
            break;
        case 'neitherBicycleBasket':    // 둘 다 안선택
            text = "친구들이 언제 올지 모르니 생각할 겨를 없이 빨리 다녀와야지.";
            result = "대기오염 7 증가, 수질오염 7 증가, 토양오염 7 증가";
            break;

        //event_19 자발적
        case 'eitherBibleBook': // 둘 중 하나만 선택
            var maxEco = findMaxEco();
            var eco = matchEcoTxt(maxEco);
            changeEco = {eco: maxEco, value: -5};

            text = "찾아보긴 했는데 뭔가 더 알아야할 것 같은데.";
            result = eco+" 5 감소";
            break;        
        case 'bothBibleBook':   // 둘 다 선택
            var maxEco = findMaxEco();
            var eco = matchEcoTxt(maxEco);
            changeEco = {eco: maxEco, value: -15};

            text = "성경책이랑 환경지침도서를 보면 잘 나와있어!";
            result = eco+" 15 감소";
            break;
        case 'neitherBibleBook':    // 둘 다 안선택
            text = "아 조금 더 공부해야겠어. 아무것도 모르겠네...";
            break;

        // event_20 자연착취1
        case 'yes_nature_1':
            text = "지구를 보호하는 것보다는 내 체력이 먼저지.";
            result = "대기오염 10 증가, 체력 5 증가";
            break;
        case 'no_nature_1':  
            text = "그래도 환경을 생각해야지. 선풍기만 틀자.";
            break;

        // event_21 자연착취2
        case 'yes_nature_2':
            text = "와 시원해! 이제 좀 살 것 같네.";
            result = "수질오염 10 증가, 체력 5 증가";
            break;
        case 'no_nature_2':  
            text = "조금 더워도 참자.";
            break;

        // event_22 자연착취3
        case 'yes_nature_3':
            text = "와 맛있어. 남을 것 같지만 일단 많이 담자.";
            result = "토양오염 10 증가, 체력 5 증가";
            break;
        case 'no_nature_3':  
            text = "아무리 배고파도 먹을 수 있을 정도만 담아서 음식물 쓰레기를 만들지 말자.";
            break;

        // event_23 문화 1단계
        case 'yes_culture_1':
            text = "앗 성경책이 이런 곳에 있었네. 어쩐지 안보이더라, 이제 잘 보이는 곳에 보관해야지!";
            break;
        case 'no_culture_1':
            text = "정리를 해도 해도 끝이 없는 거 같아. 다음에 더 해야겠다.";
            break;

        // event_24 문화 2단계
        case 'yes_culture_2_bible':
            text = "나는 내 성경책을 챙겨왔지! 성경 퀴즈 대회에 1등 할 준비 완료!";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소, 체력 1 감소";
            break;
        case 'no_culture_2_bible':
            text = "전도사님 저 성경책이 없어요. 저도 그 프린트물 좀 주세요!";
            result = "대기오염 2 증가, 수질오염 2 증가, 토양오염 2 증가, 체력 1 감소";
            break;

        // event_25 문화 2단계
        case 'yes_culture_2_mic':
            text = "제가 발표해볼게요. 하나님의 창조세계는 우리가 지켜야 할 소중한 곳이에요.";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소, 체력 1 감소"
            break;
        case 'no_culture_2_mic':
            text = "아, 저번 주에 뭐 배웠더라..? 기억이 안 나네.. 조용히 있자.";
            result = "대기오염 2 증가, 수질오염 2 증가, 토양오염 2 증가, 체력 1 감소";
            break;

        // event_26 문화 3단계
        case 'yes_culture_3_book':
            text = "마침 내가 읽은 책에서 환경에 대해 잘 알 수 있었는데 오늘은 환경보호 동아리에 가볼까?";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소, 체력 3 감소";
            break;
        case 'no_culture_3_book':
            text = "일단은 내가 하고 싶은 게 더 중요하지. 나는 축구 동아리 가야지!";
            break;

        // event_27 문화 3단계
        case 'yes_culture_3_tumbler':
            text = "선생님! 저는 제 텀블러가 있어요. 음료수는 여기에 담아주세요. 감사합니다.";
            result = "토양오염 3 감소";
            break;
        case 'no_culture_3_tumbler':
            text = "선생님! 저는 음료수 많이 먹고 싶어요. 종이컵 두 개에 가득 담아주세요!";
            result = "토양오염 2 증가"
            break;

        // event_28 문화 3단계
        case 'yes_culture_3_tumbler':
            text = "자전거를 타고 가면 금방 도착할 수 있을거야! 빨리 가자!";
            result = "대기오염 3 감소";
            break;
        case 'no_culture_3_tumbler':
            text = "아빠, 아빠, 저 학교에 늦었어요! 빨리 차로 데려다주세요!";
            result = "대기오염 2 증가"
            break;

        // event_29 문화 4단계
        case 'yes_culture_4':
            text = "우와, 그런 좋은 일에 제가 빠질 수 없죠! 저도 같이 가요 전도사님! 우리 동네를 깨끗이 청소해요.";
            result = "대기오염 10 감소, 수질오염 10 감소, 토양오염 10 감소, 체력 5 감소";
            break;
        case 'no_culture_4':
            text = "아 전도사님.. 제가 오늘은 좀 피곤해서.. 다음에 또 할 때는 꼭 같이 갈게요!";
            result = "대기오염 3 증가, 수질오염 3 증가, 토양오염 3 증가";
            break;

        // event_30 환경 1단계
        case 'yes_env_1_children':
            text = "애들아, 이 책 알아? 생각보다 엄청 재미있고 유익한 책이더라고. 너희들도 꼭 읽어봤으면 좋겠어. 내꺼 빌려줄게!";
            break;
        case 'no_env_1_children':
            text = "내가 환경지침 도서를 먼저 찾아서 읽어봐야겠어.";
            break;

        // event_31 환경 1단계
        case 'yes_env_1_teacher':
            text = "선생님! 제가 요즘 환경지킴 책을 읽고 있는데요, 조금 어려운 부분도 있어서요. <br> 이 부분에 대해서 선생님이 알려주시면 좋겠어요.";
            break;
        case 'no_env_1_teacher':
            text = "내가 환경지침 도서를 먼저 찾아서 읽어봐야겠어.";
            break;

        // event_32 환경 1단계
        case 'yes_env_1_library':
            text = "저희 학교에는 환경지킴 도서가 없는 것 같아요. <br> 이런 책이 많이 있어야 다른 친구들도 환경의 중요성을 알게 되지 않을까요? 학교 도서관에 꼭 비치해주세요!";
            break;
        case 'no_env_1_library':
            text = "내가 환경지침 도서를 먼저 찾아서 읽어봐야겠어.";
            break;

        // event_33 환경 2단계
        case 'env_2_tumbler':
            text = "플라스틱 컵, 종이컵을 줄이는 가장 좋은 방법은 모두가 자기 텀블러를 사용하는 거지! 텀블러를 기부해야겠다.";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소";
            break;
        case 'env_2_bicycle':
            text = "많은 친구들이 자전거를 타고 다니면 그만큼 대기오염이 줄어들 거야. 친구들아, 같이 자전거 타고 다니자!";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소";
            break;
        case 'env_2_soap':
            text = "요즘은 손 씻기가 정말 중요하지! 손을 씻을 때 천연비누를 사용하면 손도 깨끗해지고, 수질오염도 막을 수 있을 거야. <br> 나는 천연 비누를 기부해야지.";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소";
            break;
        case 'env_2_nothing':
            text = "난 아직 뭘 기부해야할지 모르겠는데, 좀 더 생각해볼까?";
            result = "대기오염 2 증가, 수질오염 2 증가, 토양오염 2 증가";
            break;

        // event_34 환경 2단계
        case 'env_2_2_soapnut':
            text = "소프넛으로 화장실을 청소하면, 더 깨끗하게 청소하면서 환경도 지킬 수 있을 거야. <br> 그러려면 소프넛이 많아야겠지? 내가 가진 것도 기부해야겠다.";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소, 소프넛 소모";
            giveItem = 'soapnut';
            break;
        case 'env_2_2_soap':
            text = "화장실에 있는 비누들을 천연비누로 바꾸면 더 좋을 것 같아! <br> 다들 천연비누에 곧 익숙해지겠지?";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소, 천연비누 소모";
            giveItem = 'soap';
            break;
        case 'env_2_2_basket':
            text = "화장실에 필요한 도구들을 많이 사야 할 것 같아. <br> 많은 물건을 살 때는 역시 장바구니가 필수지! 일회용 봉투 말고 장바구니를 사용해보자고!";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소";
            break;
        case 'env_2_2_nothing':
            text = "난 아직 뭘 기부해야할지 모르겠는데, 좀 더 생각해볼까?";
            result = "대기오염 2 증가, 수질오염 2 증가, 토양오염 2 증가";
            break;

        // event_35 청지기 1단계
        case 'keeper_1_bible':
            var maxEco = findMaxEco();
            var eco = matchEcoTxt(maxEco);
            changeEco = {eco: maxEco, value: -5};

            text = "엄마, 아빠! 저도 가정예배를 드리고 싶어요. 우리 같이 예배해요.";
            result = eco+" 5 감소";
            break;
        case 'keeper_1_book':
            var maxEco = findMaxEco();
            var eco = matchEcoTxt(maxEco);
            changeEco = {eco: maxEco, value: -5};

            text = "엄마, 아빠! 이 책 좀 봐보세요. 우리가 살아가는 세상을 이제 우리가 지켜야 해요.";
            result = eco+" 5 감소";            
            break;
        case 'keeper_1_nothing':
            text = "아직 부모님을 설득하기엔 부족한걸.";
            break;

        // event_36 청지기 2단계
        case 'keeper_2_yesTalk':
            text = "부모님께서 조금은 불편해도 환경을 지키는 모범적인 가정이 되어보자고 하신다. <br> 혼자서는 힘들어도 가족과 함께하면 할 수 있을 거야!";
            result = "대기오염 2 감소, 수질오염 2 감소, 토양오염 2 감소";
            break;
        case 'keeper_2_noTalk':
            text = "왠지 잔소리를 들을 것만 같아서 숙제가 많다고 다음에 대화하자고 했다.";
            break;

        // event_37 청지기 3단계
        case 'keeper_3_yesSoapnut':
            text = "부모님께 소프넛에 대해서 알려드리고 소프넛을 드렸다.";
            result = "수질오염 5 감소";
            if(random(50)){
                giveItem = 'soapnut';
                result += ", 소프넛 소모";
            }
            break;
        case 'keeper_3_noSoapnut':
            text = "나도 잘 몰라서 생각해 본다고 했다.";
            result = "수질오염 3 증가";
            break;

        // event_38 청지기 4단계
        case 'keeper_4_bicycle':
            text = "항상 차를 타고 다니는 이웃에게 자전거를 선물해주면서 가까운 거리는 자전거로도 다닐 수 있음을 알려줬다.";
            result = "대기오염 5 감소, 수질오염 5 감소, 토양오염 5 감소, 자전거 소모";
            giveItem = 'bicycle';
            break;
        case 'keeper_4_tumbler':
            text = "엄마가 옆집 아주머니랑 카페를 가신다길래 텀블러를 꼭 가져가라고 말씀드렸다. 카페에 텀블러는 기본이지!";
            result = "대기오염 5 감소, 수질오염 5 감소, 토양오염 5 감소, 텀블러 소모";
            giveItem = 'tumbler';
            break;
        case 'keeper_4_envbook':
            text = "아빠가 도서 모임에 환경지침 도서를 가져가신다고 하셨다. <br> 내가 아끼는 책이었지만 더 많은 사람들이 환경에 관심을 가질 수 있는 기회인 것 같아서 기쁜 마음으로 드렸다.";
            result = "대기오염 5 감소, 수질오염 5 감소, 토양오염 5 감소, 환경지침 도서 소모";
            giveItem = 'book';
            break;
        case 'keeper_4_nothing':
            text = "아직 도울 수 있는 게 없는 것 같아...";
            break;

        default:
            break;
    }

    $("#text").html(text);
    $("#result").html(result);
}


function sendValue(value, location) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log("응답:", xhr.responseText);
        }
    };
    xhr.open('POST', '../'+location);
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(JSON.stringify(value));
}

function doEvent() {
    
    console.log('전송하는 user_pick: ', userSelect);
    // 1. input hidden의 value를 결과를 토대로 모달창 내용 생성
    setResultModal(userSelect);

    const done = new Audio('../audio/doneEvent.mp3');
    done.volume = 0.3;

    var resultModal = document.getElementById('result-modal');
    resultModal.addEventListener('shown.bs.modal', function (event) {
        done.play();
    });

    resultModal.addEventListener('hidden.bs.modal', function (event) {
        console.log("닫힘 이벤트 발생");
        (location || window.location || document.location).reload();
    });

    // 2. php로 전달
    sendValue({id: userSelect}, 'event.php'); // 기본적인 오염도, 체력 수정

    if(changeEco['value'] != 0){    // 최대 오염도를 수정해야 하면
        sendValue(changeEco, 'changeMaxEco.php');
    }
    if(getItem){  // 얻은 아이템이 있으면 -> "", null, undefined, 0, NaN은 false
        if(Array.isArray(getItem)){
            for (let i = 0; i < getItem.length; i++) {
                const value = {item: getItem[i], type: 'add'};
                sendValue(value, 'changeItem.php');
            }
        } else{     // 배열이 아니면 .length를 사용 못해서 else인 경우로 처리해줌
            const value = {item: getItem, type: 'add'};
            sendValue(value, 'changeItem.php');
        }
        
    }
    if(giveItem){
        const value = {item: giveItem, type: 'remove'};
        sendValue(value, 'changeItem.php');
    }
    if(damageItem){   // 손상된 아이템이 있으면
        const value = {item: damageItem, type: 'damage'};
        sendValue(value, 'changeItem.php');
    }
}