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
    var text = "";
    var result = "";
    switch (choice) {
        case 'yesBasket':
            text = "장바구니가 여기있네! 가져가야겠다.";
            result = "대기오염 3 감소, 체력 1감소";
            break;
        case 'noBasket':
            text = "장바구니가 어디 갔는지 모르겠네.";
            result = "대기오염 5 증가, 체력 1감소";
            break;
        default:
            break;
    }

    $("#text").text(text);
    $("#result").text(result);
}

function closeModal() {
    console.log("closeModal()");
    $(".show").removeClass('fade').modal('hide');
    $("#event_1").modal("dispose");
}

function sendValue(value) {
    console.log("sendValue()");
    // php에 정보를 보냄 (= 선택결과에 따른 DB 변경)
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
    
    const user_pick = $(".option-value input[name=user_pick]").attr('value');
    // 1. input hidden의 value를 결과를 토대로 모달창 내용 생성
    resultModal(user_pick);
    // 2. php로 전달
    sendValue(user_pick);
}