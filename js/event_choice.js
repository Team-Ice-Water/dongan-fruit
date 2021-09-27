var item_count = 0;
console.log(itemInfo);

console.log("가진 item 갯수: ", itemInfo['item_count']);
console.log("event_choice 열림: ", select);

switch (select) {
    case 'event_1':
        // event_1
        if(itemInfo["basket"] != 0){
            document.querySelector('.option_1').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBasket">선택지 1 (장바구니 선택하기) </button>';
        }else if(itemInfo["basket"] == 0){
            document.querySelector('.option_1').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBasket">선택지 1 (장바구니 선택 안함) </button>';
        }
        break;

    case 'event_2':
        // event_2
        if(itemInfo["tumbler"] != 0){
            document.querySelector('.option_2').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesTumbler">선택지 1 (텀블러 선택하기) </button>';
        }else if(itemInfo["tumbler"] == 0){
            document.querySelector('.option_2').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noTumbler">선택지 1 (텀블러 선택 안함) </button>';
        }
        break;

    case 'event_3':
        // event_3 -- 선택지 검토
        if(itemInfo["soap"] == 0){  // 비누 없을때 샴푸바디워시 & 물로만
            document.querySelector('.option_3').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="Shampoowash">선택지 1 (바디워시, 샴푸 사용하기) </button>';
            document.querySelector('.option_3').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="waterwash">선택지 2 (물로만 샤워하기) </button>');
        }else if(itemInfo["soap"] != 0){  // 비누 있을때 비누
            document.querySelector('.option_3').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="soapwash">선택지 1 (천연비누 사용하기) </button>';
        }
        break;

    case 'event_4':
        // event_4
        if(itemInfo["book"] != 0){
            document.querySelector('.option_4').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBook">선택지 1 (환경지침도서 선택하기) </button>';
        }else if(itemInfo["book"] == 0){
            document.querySelector('.option_4').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBook">선택지 1 (환경지침도서 선택 안함) </button>';
        }
        break;

    case 'event_5':
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
        break;
        
    case 'event_6':
        // event_6
        if(itemInfo["soapnut"] != 0){
            document.querySelector('.option_6').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesSoapnut">선택지 1 (소프넛 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noSoapnut">선택지 2 (소프넛 선택 안함) </button>';
        }else if(itemInfo["soapnut"] == 0){
            document.querySelector('.option_6').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noSoapnut">선택지 1 (소프넛 선택 안함) </button>';
        }
        break;

    case 'event_7':
        // event_7
        var num = 1;
        if(itemInfo["bicycle"] != 0){   // 자전거 있으면
            document.querySelector('.option_7').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBicycle">선택지 1 (자전거 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noBicycle">선택지 2 (자전거 선택 안함) </button>';                 
        }else if(itemInfo["bicycle"] == 0){
            document.querySelector('.option_7').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBicycle">선택지 1 (자전거 선택 안함) </button>';
        }    
        break;

    case 'event_8':
        // event_8
        if(itemInfo["bible"] != 0){
            document.querySelector('.option_8').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBible">선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noBible">선택지 2 (성경책 선택 안함) </button>';
        }else if(itemInfo["bible"] == 0){
            document.querySelector('.option_8').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBible">선택지 1 (성경책 선택 안함) </button>';
        } 
        break;

    case 'event_12':
        // event_12
        if(itemInfo["bible"] != 0){  // 성경책 있으면 구매 X
            document.querySelector('.option_12').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBuyBible">선택지 1 (성경책 구입 안함) </button>';
        }else if(itemInfo["bible"] == 0){  // 성경책 없으면 구매 O
            document.querySelector('.option_12').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBuyBible">선택지 1 (성경책 구입하기) </button>';
        }  
        break;

    case 'event_13':
        if(itemInfo["soap"] != 0){
            document.querySelector('.option_13').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesGiveSoap">선택지 1 (천연비누를 주기) </button> <button type="button" class="list-group-item list-group-item-action" name="noGiveSoap">선택지 2 (천연비누를 주지 않음) </button>';
        }else if(itemInfo["soap"] == 0){
            document.querySelector('.option_13').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noGiveSoap">선택지 1 (천연비누를 주지 않음) </button>';
        }
        break;

    case 'event_14':
        // event_14 - 검토하기
        if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) < 130){
            document.querySelector('.option_14').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="pollution_below130">선택지 1 (오염수치 총합이 130미만 일 때) </button>';
        }else if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) >= 130){
            document.querySelector('.option_14').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="pollution_above130">선택지 1 (오염수치 총합이 130이상 일 때) </button>';
        }
        break;

    case 'event_15':
        if(itemInfo["flowerpot"] != 0){
            document.querySelector('.option_15').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesFlowerpot">선택지 1 (화분 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noFlowerpot">선택지 2 (화분 선택하지 않음) </button>';
        }else if(itemInfo["flowerpot"] == 0){
            document.querySelector('.option_15').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noFlowerpot">선택지 1 (화분 선택하지 않음) </button>';
        }
        break;

    case 'event_16':
        // event_16
        if(itemInfo['item_count'] >= 6){
            document.querySelector('.option_16').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="above_6_item">선택지 1 (갖고 있는 아이템이 6개 이상이다.) </button>';
        }else if(itemInfo['item_count'] < 6){
            document.querySelector('.option_16').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="below_6_item">선택지 1 (갖고 있는 아이템이 6개 미만이다.) </button>';
        }
        break;

    case 'event_18':
        // event_18 - 검토
        if(itemInfo["basket"] != 0 && itemInfo["bicycle"] != 0){    
            // 장바구니O 자전거O
            document.querySelector('.option_18').innerHTML = ' <button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket">선택지 1 (자전거만 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket">선택지 2 (장바구니만 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="bothBicycleBasket">선택지 3 (자전거와 장바구니 둘 다 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket">선택지 4 (자전거와 장바구니를 모두 가져가지 않는다.) </button>';
        }else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] != 0){ 
            // 장바구니X 자전거O
            document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket">선택지 1 (자전거를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket">선택지 2 (자전거를 가져가지 않는다.) </button>';
        }else if(itemInfo["basket"] != 0 && itemInfo["bicycle"] == 0){
            // 장바구니O 자전거X
            document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket">선택지 1 (장바구니를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket">선택지 2 (장바구니를 가져가지 않는다.) </button>';
        }else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] == 0){
            // 장바구니X 자전거X
            document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket">선택지 1 (가져갈 수 있는 장바구니와 자전거가 없다.) </button>';
        }
        break;

    case 'event_19':
        // event_19 - 검토
        if(itemInfo["bible"] != 0 && itemInfo["book"] != 0){
            // 성경O 책O
            document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook">선택지 1 (환경지침 도서만 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook">선택지 2 (성경책만 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="bothBibleBook">선택지 1 (성경책과 환경지침 도서 둘 다 선택하기) </button>';
        }else if(itemInfo["bible"] == 0 && itemInfo["book"] != 0){
            // 성경X 책O
            document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook">선택지 1 (환경지침 도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBibleBook">선택지 2 (환경지침 도서 선택하지 않음) </button>';
        }else if(itemInfo["bible"] != 0 && itemInfo["book"] == 0){
            // 성경O 책X
            document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook">선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBibleBook">선택지 2 (성경책 선택하지 않음) </button>';
        }else if(itemInfo["bible"] == 0 && itemInfo["book"] == 0){
            // 성경X 책X
            document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="neitherBibleBook">선택지 1 (찾아볼 수 있는 성경책과 환경지침 도서가 없다.) </button>';
        } 
        break;


    case 'event_23':
        if(itemInfo["bible"] != 0){
            document.querySelector('.option_23').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_1">선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_1">선택지 2 (성경책 선택하지 않음) </button>';
        }else if(itemInfo["bible"] == 0){
            document.querySelector('.option_23').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_1">선택지 1 (성경책 선택하지 않음) </button>';
        }
        break;

    case 'event_24':
        if(itemInfo["bible"] != 0){
            document.querySelector('.option_24').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_2_bible">선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_2_bible">선택지 2 (성경책 선택하지 않음) </button>';
        }else if(itemInfo["bible"] == 0){
            document.querySelector('.option_24').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_2_bible">선택지 1 (성경책 선택하지 않음) </button>';
        }
        break;

    case 'event_25':
        if(itemInfo["mic"] != 0){
            document.querySelector('.option_25').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_2_mic">선택지 1 (마이크 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_2_mic">선택지 2 (마이크 선택하지 않음) </button>';
        }else if(itemInfo["mic"] == 0){
            document.querySelector('.option_25').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_2_mic">선택지 1 (마이크 선택하지 않음) </button>';
        }
        break;

    case 'event_26':
        if(itemInfo["book"] != 0){
            document.querySelector('.option_26').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_book">선택지 1 (환경지침도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_3_book">선택지 2 (환경지침도서 선택하지 않음) </button>';
        }else if(itemInfo["book"] == 0){
            document.querySelector('.option_26').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_book">선택지 1 (환경지침도서 선택하지 않음) </button>';
        }
        break; 

    case 'event_27':
        if(itemInfo["tumbler"] != 0){
            document.querySelector('.option_27').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_tumbler">선택지 1 (텀블러 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_3_tumbler">선택지 2 (텀블러 선택하지 않음) </button>';
        }else if(itemInfo["tumbler"] == 0){
            document.querySelector('.option_27').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_tumbler">선택지 1 (텀블러 선택하지 않음) </button>';
        } 
        break;

    case 'event_28':
        if(itemInfo["bicycle"] != 0){
            document.querySelector('.option_28').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_bicycle">선택지 1 (자전거 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_3_bicycle">선택지 2 (자전거 선택하지 않음) </button>';
        }else if(itemInfo["bicycle"] == 0){
            document.querySelector('.option_28').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_bicycle">선택지 1 (자전거 선택하지 않음) </button>';
        } 
        break;

    case 'event_29':
        if(userInfo["health"] >= 70){
            document.querySelector('.option_29').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_4">선택지 1 (체력이 충분하다. 전도사님과 함께 청소한다.) </button>';
        }else if(userInfo["health"] < 70){
            document.querySelector('.option_29').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_4">선택지 1 (체력이 부족하다. 집으로 간다.) </button>';
        }
        break;

    case 'event_30':
        // event_30
        if(itemInfo["book"] != 0){
            document.querySelector('.option_30').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_children">선택지 1 (환경지침도서 선택하기)</button> <button type="button" class="list-group-item list-group-item-action" name="no_env_1_children">선택지 2 (환경지침도서 선택 안함)</button>';
        }else if(itemInfo["book"] == 0){
            document.querySelector('.option_30').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_children">선택지 1 (환경지침도서 선택 안함)</button>';
        }
        break;

    case 'event_31':
        // event_31
        if(itemInfo["book"] != 0){
            document.querySelector('.option_31').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_teacher">선택지 1 (환경지침도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_env_1_teacher">선택지 2 (환경지침도서 선택 안함) </button>';
        }else if(itemInfo["book"] == 0){
            document.querySelector('.option_31').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_teacher">선택지 1 (환경지침도서 선택 안함) </button>';
        }
        break;
    
    case 'event_32':
        // event_32
        if(itemInfo["book"] != 0){
            document.querySelector('.option_32').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_library">선택지 1 (환경지침도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_env_1_teacher">선택지 2 (환경지침도서 선택 안함) </button>';
        }else if(itemInfo["book"] == 0){
            document.querySelector('.option_32').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_library">선택지 1 (환경지침도서 선택 안함) </button>';
        } 
        break;

    case 'event_33':
        var num = 1;
        var btnTxt = "";

        if(itemInfo["tumbler"] != 0){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soapnut">선택지 '+num+' (소프넛 선택하기)</button>';
            num++;
        }
        if(itemInfo["bicycle"] != 0){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soap">선택지 '+num+' (천연비누 선택하기)</button>';
            num++;
        }
        if(itemInfo["soap"] != 0){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_basket">선택지 '+num+' (장바구니 선택하기)</button>';
        }
        
        if((itemInfo["tumbler"] == 0) && (itemInfo["bicycle"] == 0) && (itemInfo["soap"] == 0)){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_nothing">선택지 1 (줄 수 있는 물건이 없다.)</button>';
        } else {
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_nothing">선택지 '+num+' (선택하지 않음)</button>'
        }

        document.querySelector('.option_33').innerHTML = btnTxt;
        break;

    case 'event_34':
        // event_34
        var num = 1;
        var btnTxt = "";

        if(itemInfo["soapnut"] != 0){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soapnut">선택지 '+num+' (소프넛 선택하기)</button>';
            num++;
        }
        if(itemInfo["soap"] != 0){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soap">선택지 '+num+' (천연비누 선택하기)</button>';
            num++;
        }
        if(itemInfo["basket"] != 0){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_basket">선택지 '+num+' (장바구니 선택하기)</button>';
        }
        
        if((itemInfo["soapnut"] == 0) && (itemInfo["soap"] == 0) && (itemInfo["basket"] == 0)){
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_nothing">선택지 1 (화장실에 사용할 아이템이 없다.)</button>';
        } else{
            btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_nothing">선택지 '+num+' (선택하지 않음)</button>';
        }

        document.querySelector('.option_34').innerHTML = btnTxt;
        break;

    case 'event_35':
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
        break;

    case 'event_36':
        break;

    case 'event_37':
        // event_37
        if(itemInfo["soapnut"] != 0){
            document.querySelector('.option_37').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_3_yesSoapnut">선택지 1 (소프넛 선택하기) </button>';
        }else if(itemInfo["soapnut"] != 0){
            document.querySelector('.option_37').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_3_noSoapnut">선택지 2 (소프넛 선택하지 않음) </button>';
        }    
        break;

    case 'event_38':
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
        break;


    default:
        break;
}
 


