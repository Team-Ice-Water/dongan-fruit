setTimeout(() => {
    console.log('실행');
    document.body.classList.add("reveal");
}, 1000)

// 종료 누르거나 할 때
// 페이지 바꾸기 전에
// document.body.classList.add("reveal"); 
// 이벤트 리스너로 해주면 될 듯