var item_count = 0;
console.log(itemInfo);

console.log("가진 item 갯수: ", itemInfo['item_count']);
console.log("event_choice 열림: ", select);

function setting(select) {
    switch (select) {
        case 'event_1':
            // event_1
            if(itemInfo["basket"] != 0){
                document.querySelector('.option_1').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBasket" onclick="sendUserPick(this.name);">선택지 1 (장바구니 선택하기) </button>';
            }else if(itemInfo["basket"] == 0){
                document.querySelector('.option_1').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBasket" onclick="sendUserPick(this.name)">선택지 1 (장바구니가 없다. 그냥 나간다.) </button>';
            }
            break;
    
        case 'event_2':
            // event_2
            if(itemInfo["tumbler"] != 0){
                document.querySelector('.option_2').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesTumbler" onclick="sendUserPick(this.name);"">선택지 1 (텀블러 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noTumbler" onclick="sendUserPick(this.name);">선택지 2 (텀블러 두고가기) </button>';
            }else if(itemInfo["tumbler"] == 0){
                document.querySelector('.option_2').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noTumbler" onclick="sendUserPick(this.name)">선택지 1 (가져갈 텀블러가 없다. 그냥 나간다.) </button>';
            }
            break;
    
        case 'event_3':
            // event_3 -- 선택지 검토
            if(itemInfo["soap"] == 0){  // 비누 없을때 샴푸바디워시 & 물로만
                document.querySelector('.option_3').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="Shampoowash" onclick="sendUserPick(this.name)">선택지 1 (바디워시, 샴푸 사용하기) </button> <button type="button" class="list-group-item list-group-item-action" name="waterwash" onclick="sendUserPick(this.name)">선택지 2 (물로만 샤워하기) </button>';
            }else if(itemInfo["soap"] != 0){  // 비누 있을때 비누
                document.querySelector('.option_3').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="Shampoowash" onclick="sendUserPick(this.name)">선택지 1 (바디워시, 샴푸 사용하기) </button> <button type="button" class="list-group-item list-group-item-action" name="soapwash" onclick="sendUserPick(this.name)">선택지 2 (천연비누 사용하기) </button> <button type="button" class="list-group-item list-group-item-action" name="waterwash" onclick="sendUserPick(this.name)">선택지 3 (물로만 샤워하기) </button>';
            }
            break;
    
        case 'event_4':
            // event_4
            if(itemInfo["book"] != 0){
                document.querySelector('.option_4').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBook" onclick="sendUserPick(this.name)">선택지 1 (환경지침 도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noBook" onclick="sendUserPick(this.name)">선택지 2 (환경지침 도서 선택 안함) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option_4').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBook" onclick="sendUserPick(this.name)">선택지 1 (환경지침 도서가 없다. 그냥 버린다.) </button>';
            }
            break;
    
        case 'event_5':
            // event_5
            if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] != 0){  // 산삼O, 비타민O
                document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesGinseng" onclick="sendUserPick(this.name)">선택지 1 (최고급 산삼을 먹는다.) </button>';
                document.querySelector('.option_5').insertAdjacentHTML('beforeend','<button type="button" class="list-group-item list-group-item-action" name="yesVitamin" onclick="sendUserPick(this.name)">선택지 2 (비타민을 먹는다.) </button>');
            }else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] != 0){  // 산삼X, 비타민O
                document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesVitamin" onclick="sendUserPick(this.name)">선택지 1 (비타민을 먹는다.)</button>';
            }else if(itemInfo["ginseng"] != 0 && itemInfo["vitamin"] == 0){  // 산삼O, 비타민X
                document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesGinseng" onclick="sendUserPick(this.name)">선택지 1 (최고급 산삼을 먹는다.)</button>';
            }else if(itemInfo["ginseng"] == 0 && itemInfo["vitamin"] == 0){  // 산삼X, 비타민X
                document.querySelector('.option_5').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noGinsengNoVitamin" onclick="sendUserPick(this.name)">선택지 1 (건강보조제가 없다. 그냥 참는다.)</button>';
            }
            break;
            
        case 'event_6':
            // event_6
            if(itemInfo["soapnut"] != 0){
                document.querySelector('.option_6').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesSoapnut" onclick="sendUserPick(this.name)">선택지 1 (소프넛 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noSoapnut" onclick="sendUserPick(this.name)">선택지 2 (소프넛 선택 안함) </button>';
            }else if(itemInfo["soapnut"] == 0){
                document.querySelector('.option_6').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noSoapnut" onclick="sendUserPick(this.name)">선택지 1 (사용할 수 있는 소프넛이 없다. 세제를 사용한다.) </button>';
            }
            break;
    
        case 'event_7':
            // event_7
            var num = 1;
            if(itemInfo["bicycle"] != 0){   // 자전거 있으면
                document.querySelector('.option_7').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBicycle" onclick="sendUserPick(this.name)">선택지 1 (자전거 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noBicycle" onclick="sendUserPick(this.name)">선택지 2 (자전거 선택 안함) </button>';                 
            }else if(itemInfo["bicycle"] == 0){
                document.querySelector('.option_7').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBicycle" onclick="sendUserPick(this.name)">선택지 1 (타고 갈 자전거가 없다. 어쩔 수 없이 차를 탄다.) </button>';
            }    
            break;
    
        case 'event_8':
            // event_8
            if(itemInfo["bible"] != 0){
                document.querySelector('.option_8').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBible" onclick="sendUserPick(this.name)">선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noBible" onclick="sendUserPick(this.name)">선택지 2 (성경책 선택 안함) </button>';
            }else if(itemInfo["bible"] == 0){
                document.querySelector('.option_8').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBible" onclick="sendUserPick(this.name)">선택지 1 (성경책이 없다. 그냥 나간다.) </button>';
            } 
            break;
    
        case 'event_12':
            // event_12
            if(itemInfo["bible"] != 0){  // 성경책 있으면 구매 X
                document.querySelector('.option_12').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noBuyBible" onclick="sendUserPick(this.name)">선택지 1 (성경책 구입 안함) </button>';
            }else if(itemInfo["bible"] == 0){  // 성경책 없으면 구매 O
                document.querySelector('.option_12').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesBuyBible" onclick="sendUserPick(this.name)">선택지 1 (성경책 구입하기) </button>';
            }  
            break;
    
        case 'event_13':
            if(itemInfo["soap"] != 0){
                document.querySelector('.option_13').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesGiveSoap" onclick="sendUserPick(this.name)">선택지 1 (천연비누를 주기) </button> <button type="button" class="list-group-item list-group-item-action" name="noGiveSoap" onclick="sendUserPick(this.name)">선택지 2 (천연비누를 주지 않음) </button>';
            }else if(itemInfo["soap"] == 0){
                document.querySelector('.option_13').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noGiveSoap" onclick="sendUserPick(this.name)">선택지 1 (천연비누가 없다. 아주머니께 천연비누가 없다고 얘기한다.) </button>';
            }
            break;
    
        case 'event_14':
            // event_14 - 검토하기
            if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) < 130){
                // 오염수치 총합이 130미만 일 때, pollution_below130
                document.querySelector('.option_14').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="pollution_below130" onclick="sendUserPick(this.name)">선택지 1 (환경운동가의 이야기를 들어본다) </button>';
            }else if((ecoLevelInfo['air'] + ecoLevelInfo['soil'] + ecoLevelInfo['water']) >= 130){
                // 오염수치 총합이 130이상 일 때, pollution_above130
                document.querySelector('.option_14').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="pollution_above130" onclick="sendUserPick(this.name)">선택지 1 (환경운동가의 이야기를 들어본다) </button>';
            }
            break;
    
        case 'event_15':
            if(itemInfo["flowerpot"] != 0){
                document.querySelector('.option_15').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yesFlowerpot" onclick="sendUserPick(this.name)">선택지 1 (화분 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="noFlowerpot" onclick="sendUserPick(this.name)">선택지 2 (화분 선택하지 않음) </button>';
            }else if(itemInfo["flowerpot"] == 0){
                document.querySelector('.option_15').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="noFlowerpot" onclick="sendUserPick(this.name)">선택지 1 (가지고 있는 화분이 없다) </button>';
            }
            break;
    
        case 'event_16':
            // event_16
            if(itemInfo['item_count'] >= 6){
                // 갖고 있는 아이템이 6개 이상이다.
                document.querySelector('.option_16').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="above_6_item" onclick="sendUserPick(this.name)">선택지 1 (방 청소를 시작한다) </button>';
            }else if(itemInfo['item_count'] < 6){
                // 6개 미만, below_6_item
                document.querySelector('.option_16').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="below_6_item" onclick="sendUserPick(this.name)">선택지 1 (방 청소를 시작한다) </button>';
            }
            break;
    
        case 'event_18':
            // event_18 - 검토
            if(itemInfo["basket"] != 0 && itemInfo["bicycle"] != 0){    
                // 장바구니O 자전거O
                document.querySelector('.option_18').innerHTML = ' <button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 1 (자전거만 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 2 (장바구니만 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="bothBicycleBasket" onclick="sendUserPick(this.name)">선택지 3 (자전거와 장바구니 둘 다 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 4 (자전거와 장바구니를 모두 가져가지 않는다.) </button>';
            }else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] != 0){ 
                // 장바구니X 자전거O
                document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 1 (자전거를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 2 (자전거를 가져가지 않는다.) </button>';
            }else if(itemInfo["basket"] != 0 && itemInfo["bicycle"] == 0){
                // 장바구니O 자전거X
                document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 1 (장바구니를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 2 (장바구니를 가져가지 않는다.) </button>';
            }else if(itemInfo["basket"] == 0 && itemInfo["bicycle"] == 0){
                // 장바구니X 자전거X
                document.querySelector('.option_18').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="neitherBicycleBasket" onclick="sendUserPick(this.name)">선택지 1 (가져갈 수 있는 장바구니와 자전거가 없다. 빈손으로 차를 타고간다.) </button>';
            }
            break;
    
        case 'event_19':
            // event_19 - 검토
            if(itemInfo["bible"] != 0 && itemInfo["book"] != 0){
                // 성경O 책O
                document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook" onclick="sendUserPick(this.name)">선택지 1 (환경지침 도서만 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook" onclick="sendUserPick(this.name)">선택지 2 (성경책만 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="bothBibleBook" onclick="sendUserPick(this.name)">선택지 1 (성경책과 환경지침 도서 둘 다 선택하기) </button>';
            }else if(itemInfo["bible"] == 0 && itemInfo["book"] != 0){
                // 성경X 책O
                document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook" onclick="sendUserPick(this.name)" >선택지 1 (환경지침 도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBibleBook" onclick="sendUserPick(this.name)" >선택지 2 (환경지침 도서 선택하지 않음) </button>';
            }else if(itemInfo["bible"] != 0 && itemInfo["book"] == 0){
                // 성경O 책X
                document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="eitherBibleBook" onclick="sendUserPick(this.name)" >선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="neitherBibleBook" onclick="sendUserPick(this.name);" >선택지 2 (성경책 선택하지 않음) </button>';
            }else if(itemInfo["bible"] == 0 && itemInfo["book"] == 0){
                // 성경X 책X
                document.querySelector('.option_19').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="neitherBibleBook" onclick="sendUserPick(this.name);" >선택지 1 (찾아볼 수 있는 성경책과 환경지침 도서가 없다.) </button>';
            } 
            break;
    
    
        case 'event_23':
            if(itemInfo["bible"] != 0){
                document.querySelector('.option_23').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_1" onclick="sendUserPick(this.name);" >선택지 1 (성경책 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_1" onclick="sendUserPick(this.name);" >선택지 2 (성경책 선택하지 않음) </button>';
            }else if(itemInfo["bible"] == 0){
                document.querySelector('.option_23').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_1" onclick="sendUserPick(this.name);" >선택지 1 (성경책 선택하지 않음) </button>';
            }
            break;
    
        case 'event_24':
            if(itemInfo["bible"] != 0){
                document.querySelector('.option_24').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_2_bible" onclick="sendUserPick(this.name);" >선택지 1 (성경책을 챙겨간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_2_bible" onclick="sendUserPick(this.name);" >선택지 2 (무거우니 성경책은 두고 간다.) </button>';
            }else if(itemInfo["bible"] == 0){
                document.querySelector('.option_24').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_2_bible" onclick="sendUserPick(this.name);" >선택지 1 (가져갈 성경책이 없다. 프린트물을 받는다.) </button>';
            }
            break;
    
        case 'event_25':
            if(itemInfo["mic"] != 0){
                document.querySelector('.option_25').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_2_mic" onclick="sendUserPick(this.name);" >선택지 1 (발표 하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_2_mic" onclick="sendUserPick(this.name);" >선택지 2 (발표 안하기) </button>';
            }else if(itemInfo["mic"] == 0){
                document.querySelector('.option_25').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_2_mic" onclick="sendUserPick(this.name);" >선택지 1 (발표할 마이크 아이템이 없다. 그냥 있는다.) </button>';
            }
            break;
    
        case 'event_26':
            if(itemInfo["book"] != 0){
                document.querySelector('.option_26').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_book" onclick="sendUserPick(this.name);" >선택지 1 (환경 보호 동아리를 간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_3_book" onclick="sendUserPick(this.name);" >선택지 2 (환경 동아리가 아닌 다른 동아리로 간다.) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option_26').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_book" onclick="sendUserPick(this.name);" >선택지 1 (환경지침 도서가 없으니 환경 동아리가 아닌 다른 동아리로 간다.) </button>';
            }
            break; 
    
        case 'event_27':
            if(itemInfo["tumbler"] != 0){
                document.querySelector('.option_27').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_tumbler" onclick="sendUserPick(this.name);" >선택지 1 (텀블러를 챙겨간다) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_3_tumbler" onclick="sendUserPick(this.name);" >선택지 2 (텀블러를 두고간다) </button>';
            }else if(itemInfo["tumbler"] == 0){
                document.querySelector('.option_27').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_tumbler" onclick="sendUserPick(this.name);" >선택지 1 (가져갈 텀블러가 없다. 그냥 간다.) </button>';
            } 
            break;
    
        case 'event_28':
            if(itemInfo["bicycle"] != 0){
                document.querySelector('.option_28').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_3_bicycle" onclick="sendUserPick(this.name);" >선택지 1 (자전거를 가져간다.) </button> <button type="button" class="list-group-item list-group-item-action" name="no_culture_3_bicycle" onclick="sendUserPick(this.name);" >선택지 2 (빠른 자동차를 이용한다.) </button>';
            }else if(itemInfo["bicycle"] == 0){
                document.querySelector('.option_28').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_3_bicycle" onclick="sendUserPick(this.name);" >선택지 1 (자전거 선택하지 않음) </button>';
            } 
            break;
    
        case 'event_29':
            if(userInfo["health"] >= 70){
                document.querySelector('.option_29').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_culture_4" onclick="sendUserPick(this.name);" >선택지 1 (체력이 충분하다. 전도사님과 함께 청소한다.) </button>';
            }else if(userInfo["health"] < 70){
                document.querySelector('.option_29').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_culture_4" onclick="sendUserPick(this.name);" >선택지 1 (체력이 부족하다. 집으로 간다.) </button>';
            }
            break;
    
        case 'event_30':
            // event_30
            if(itemInfo["book"] != 0){
                document.querySelector('.option_30').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_children" onclick="sendUserPick(this.name);" >선택지 1 (환경지침 도서를 가지러 간다.)</button> <button type="button" class="list-group-item list-group-item-action" name="no_env_1_children" onclick="sendUserPick(this.name);" >선택지 2 (환경지침 도서를 가지러 가지 않는다.)</button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option_30').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_children" sendUserPick(this.name) >선택지 1 (보여줄 수 있는 환경지침 도서가 없다)</button>';
            }
            break;
    
        case 'event_31':
            // event_31
            if(itemInfo["book"] != 0){
                document.querySelector('.option_31').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 1 (선생님께 여쭤본다.) </button> <button type="button" class="list-group-item list-group-item-action" name="no_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 2 (환경지침도서 선택 안함) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option_31').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 1 (환경지침도서 선택 안함) </button>';
            }
            break;
        
        case 'event_32':
            // event_32
            if(itemInfo["book"] != 0){
                document.querySelector('.option_32').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="yes_env_1_library" onclick="sendUserPick(this.name);" >선택지 1 (환경지침도서 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="no_env_1_teacher" onclick="sendUserPick(this.name);" >선택지 2 (환경지침도서 선택 안함) </button>';
            }else if(itemInfo["book"] == 0){
                document.querySelector('.option_32').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="no_env_1_library" onclick="sendUserPick(this.name);" >선택지 1 (환경지침도서 선택 안함) </button>';
            } 
            break;
    
        case 'event_33':
            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["tumbler"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_tumbler" onclick="sendUserPick(this.name);" >선택지 '+num+' (텀블러 선택하기)</button>';
                num++;
            }
            if(itemInfo["bicycle"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_bicycle" onclick="sendUserPick(this.name);" >선택지 '+num+' (자전거 선택하기)</button>';
                num++;
            }
            if(itemInfo["soap"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_soap" onclick="sendUserPick(this.name);" >선택지 '+num+' (천연비누 선택하기)</button>';
            }
            
            if((itemInfo["tumbler"] == 0) && (itemInfo["bicycle"] == 0) && (itemInfo["soap"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_nothing" onclick="sendUserPick(this.name);" >선택지 1 (줄 수 있는 물건이 없다.)</button>';
            } else {
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>'
            }
    
            document.querySelector('.option_33').innerHTML = btnTxt;
            break;
    
        case 'event_34':
            // event_34
            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["soapnut"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soapnut" onclick="sendUserPick(this.name);" >선택지 '+num+' (소프넛 선택하기)</button>';
                num++;
            }
            if(itemInfo["soap"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_soap" onclick="sendUserPick(this.name);" >선택지 '+num+' (천연비누 선택하기)</button>';
                num++;
            }
            if(itemInfo["basket"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_basket" onclick="sendUserPick(this.name);" >선택지 '+num+' (장바구니 선택하기)</button>';
            }
            
            if((itemInfo["soapnut"] == 0) && (itemInfo["soap"] == 0) && (itemInfo["basket"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_nothing" onclick="sendUserPick(this.name);" >선택지 1 (화장실에 사용할 아이템이 없다.)</button>';
            } else{
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="env_2_2_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>';
            }
    
            document.querySelector('.option_34').innerHTML = btnTxt;
            break;
    
        case 'event_35':
            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["bible"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_bible" onclick="sendUserPick(this.name);" >선택지 '+num+' (성경책 선택하기)</button>';
                num++;
            }
            if(itemInfo["book"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_book" onclick="sendUserPick(this.name);" >선택지 '+num+' (환경지침 도서 선택하기)</button>';
                num++;
            }
            
            if((itemInfo["bible"] == 0) && (itemInfo["book"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_nothing" onclick="sendUserPick(this.name);" >선택지 1 (설득에 사용할 아이템이 없다.)</button>';
            } else{
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_1_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>';
            }
    
            document.querySelector('.option_35').innerHTML = btnTxt;
            break;
    
        case 'event_37':
            // event_37
            if(itemInfo["soapnut"] != 0){
                document.querySelector('.option_37').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_3_yesSoapnut" onclick="sendUserPick(this.name);" >선택지 1 (소프넛 선택하기) </button> <button type="button" class="list-group-item list-group-item-action" name="keeper_3_noSoapnut" onclick="sendUserPick(this.name);" >선택지 2 (소프넛 선택하지 않음) </button>';
            }else if(itemInfo["soapnut"] == 0){
                document.querySelector('.option_37').innerHTML = '<button type="button" class="list-group-item list-group-item-action" name="keeper_3_noSoapnut" onclick="sendUserPick(this.name);" >선택지 1 (소프넛 선택하지 않음) </button>';
            }    
            break;
    
        case 'event_38':
            var num = 1;
            var btnTxt = "";
    
            if(itemInfo["bicycle"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_bicycle" onclick="sendUserPick(this.name);" >선택지 '+num+' (자전거 선택하기)</button>';
                num++;
            }
            if(itemInfo["tumbler"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_tumbler" onclick="sendUserPick(this.name);" >선택지 '+num+' (텀블러 선택하기)</button>';
                num++;
            }
            if(itemInfo["book"] != 0){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_envbook" onclick="sendUserPick(this.name);" >선택지 '+num+' (환경지침 도서 선택하기)</button>';
            }
            
            if((itemInfo["tumbler"] == 0) && (itemInfo["bicycle"] == 0) && (itemInfo["book"] == 0)){
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_nothing" onclick="sendUserPick(this.name);" >선택지 1 (드릴 수 있는 물건이 없다.)</button>';
            } else {
                btnTxt += '<button type="button" class="list-group-item list-group-item-action" name="keeper_4_nothing" onclick="sendUserPick(this.name);" >선택지 '+num+' (선택하지 않음)</button>'
            }
    
            document.querySelector('.option_38').innerHTML = btnTxt;
    
    
        default:
            break;
    }
}
 


