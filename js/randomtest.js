/* 예나가 추가함 */
/* 선택지(버튼)에 이벤트 추가- 클릭시 마다 php로 보낼 정보를 수정함 */
const optionBtn = document.querySelector(".option").querySelectorAll('button');
for ( var i = 0; i < optionBtn.length; i++ ) {
    optionBtn[i].addEventListener('click', sendUserPick);
}

const sendValue = document.querySelector(".option-value").querySelector('input');

function sendUserPick(){
    sendValue.setAttribute('value', this.name)
}