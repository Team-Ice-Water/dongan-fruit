// 선택지(버튼)에 이벤트 추가- 클릭시 마다 php로 보낼 정보를 수정함

// 모달창마다 클래스명이 다 같기 때문에 show된 모달에 대해서 적용해야 한다. 
// (클래스명이 같으면 최상위 요소에만 적용되기 때문)

var openModal;

var check = setInterval( () => {    // 모달이 열리기 전까지 반복 실행
    if(document.querySelector(".show")){    
        openModal = document.querySelector(".show");    // 열린 모달을 저장
        const optionBtn = openModal.querySelector(".list-group").querySelectorAll('button');
    
        for ( var i = 0; i < optionBtn.length; i++ ) {
            optionBtn[i].addEventListener('click', sendUserPick);
        }
        clearInterval(check);   // 모달은 자동으로 띄움을 가정하기 때문에, 한 번 띄워지면 함수 반복 중단
    }
},1000); 


function sendUserPick(){
    const sendValue = openModal.querySelector(".option-value").querySelector('input');
    sendValue.setAttribute('value', this.name);
}



function resultModal(choice) {
    console.log("resultModal()");
    //const pick = $(".show input[name=user_pick]");
    var text = "";
    var result = "";
    switch (choice) {
        case 'yesBasket':
            text = "장바구니가 여기있네!<br> 가져가야겠다.";
            result = "대기오염 3 감소, 체력 1감소";
            break;
        case 'noBasket':
            var giveItem;           
            var haveItems = [];         // 가지고 있는 아이템들의 이름을 저장하는 배열
            console.log("test.js에서 itemInfo: ", itemInfo);
            for (let key in itemInfo) {
                if(itemInfo[key] == 1){
                    haveItems.push(key);
                }
            }
            console.log("가진 아이템: ", haveItems);

            var jbRandom = Math.random();
            const random = Math.floor( jbRandom * haveItems.length );
            console.log("random숫자: ", random);
            // 그 배열 중에 랜덤으로 하나 선택하여 giveItem 변수를 바꿔줌
            switch (haveItems[random]) {
                case 'tumbler':
                    giveItem = "텀블러";
                    break;
                case 'flowerpot':
                    giveItem = "화분";
                    break;
                case 'mic':
                    giveItem = "마이크";
                    break;
                case 'basket':
                    giveItem = "장바구니";
                    break;
                case 'book':
                    giveItem = "환경 지침 도서";
                    break;
                case 'vitamin':
                    giveItem = "비타민";
                    break;
                case 'bicycle':
                    giveItem = "자전거";
                    break;
                case 'soap':
                    giveItem = "천연비누";
                    break;
                case 'soapnut':
                    giveItem = "소프넛";
                    break;
                case 'ginseng':
                    giveItem = "최고급 인삼";
                    break;
            
                default:
                    break;
            }


            text = " 나: 저.. 성경책이 없는데, 혹시 제가 가지고 있는 "+giveItem+"(이)랑 성경책을 바꿔 주실 수 있으세요? <br> 판매원: 성경을 사랑하는 멋진 친구구나! 그래, 네가 가진 물건이랑 성경책이랑 바꾸자! ";
            result = " 성경책 획득, "+giveItem+" 소모";
            break;
        
        default:
            break;
    }

    //text.replace(/\n/g, '<br/>');
    $("#text").html(text);
    $("#result").text(result);
/*
    var result_modal = new bootstrap.Modal(document.getElementById('result-modal'), {
        keyboard: false // ESC 눌러도 창 안닫히게
    })
    result_modal.show(); 
    $("#result-modal").modal('show');
    $(".modal-backdrop").remove();*/
}

function closeModal() {
    console.log("closeModal()");
    $(".show").removeClass('fade').modal('hide');
    $("#event_1").modal("dispose");
}

function sendValue(value) {
    console.log("sendValue()");
    // php에 정보를 보냄 (=DB 변경)
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
        }
    };
    xhr.open('POST', '../event.php');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(JSON.stringify(value));
}


function doEvent() {
    console.log("doEvent()");
    // 1. input hidden의 value를 php로 전달
    
    const user_pick = $(".option-value input[name=user_pick]").attr('value');
    // 2. 결과 모달창 내용 생성
    resultModal(user_pick);
    sendValue(user_pick);
}

