// 선택지(버튼)에 이벤트 추가- 클릭시 마다 php로 보낼 정보를 수정함

// 모달창마다 클래스명이 다 같기 때문에 show된 모달에 대해서 적용해야 한다. 
// (클래스명이 같으면 최상위 요소에만 적용되기 때문)

var openModal;

var check = setInterval( () => {    // 모달이 열리기 전까지 반복 실행
    if(document.querySelector(".show")){    
        openModal = document.querySelector(".show");    // 열린 모달을 저장
        const optionBtn = openModal.querySelector(".option").querySelectorAll('button');
    
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