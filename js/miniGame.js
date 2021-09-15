// Array of Deck of Card Images
const deckCards = ['basket.png', 'basket.png', 'bible.png', 'bible.png', 'bicycle.png', 'bicycle.png', 'book.png', 'book.png','ginseng.png', 'ginseng.png', 'mic.png', 'mic.png', 'soap.png', 'soap.png', 'soapnut.png', 'soapnut.png', 'tumbler.png', 'tumbler.png', 'vitamin.png', 'vitamin.png'];
// 글로벌 배열

// Access the <ul> with class of .deck
const deck = document.querySelector(".deck");

// open된 카드를 저장하는 배열
let opened = [];
// 매칭된 카드를 저장하는 배열
let matched = [];


// moves-counter 클래스 선택 and change it's HTML
const movesCount = document.querySelector(".moves-counter");

// move counter(움직임 횟수)를 위한 변수
let moves = 0;

const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function startGame() {
    // shuffle 함수를 호출하고 변수에 저장
    const shuffledDeck = shuffle(deckCards);
    console.log('deck 길이: ', shuffledDeck.length);

    // 카드 배열 반복
    for(let i=0; i<shuffledDeck.length; i++){
        // <li> 태그 생성
        const liTag = document.createElement('LI');
        // <li> 태그에 카드 클래스 지정
        liTag.classList.add('card');

        // <img> 태그 생성
        const addImage = document.createElement("IMG");
        // <li> 태그에 <img> 추가(append)
        liTag.appendChild(addImage);
        // shuffled deck으로 img src 경로 지정
        addImage.setAttribute('src', 'img/' + shuffledDeck[i]);
        // 이미지에 alt 태그 추가
        addImage.setAttribute('alt', shuffledDeck[i]);
        // deck <ul>에 새로운 <li> 업데이트
        deck.appendChild(liTag);
    }
}


function timer(){
    time = setInterval(function(){
        seconds++;
        if(seconds === 60){
            minutes++;
            seconds = 0;
        }
        // html에 표시되는 시간 변경
        timeCounter.innerHTML="<i class='fa fa-hourglass-start'></i>"+" 타이머: "+minutes+" 분 "+ seconds+" 초";
    }, 1000);
}

function stopTime(){
    clearInterval(time);
}


function movesCounter() {
    movesCount.innerHTML++;
    moves++;
}

// 열린(클릭된) 두 카드가 매칭하는지를 비교
function compareTwo(){
    // opened 배열에 2개의 카드가 있을 때
    if(opened.length === 2){
        document.body.style.pointerEvents = 'none';
    }

    if(opened.length === 2 && opened[0].src === opened[1].src){
        match();
        console.log("It's a Match!");
    } 
    else if (opened.length === 2 && opened[0].src != opened[1].src){
        noMatch();
        console.log("NO Match!");
    }
}

function match(){
    setTimeout(function() {
        opened[0].parentElement.classList.add("match");
        opened[1].parentElement.classList.add("match");

        matched.push(opened[0]);    // 매칭된 둘은 같은 사진이므로 하나만 넣어줌
        document.body.style.pointerEvents = "auto";

        finishGame();
        opened = [];
    }, 600);

    movesCounter();
}

function noMatch() {
    setTimeout(function() {
        opened[0].parentElement.classList.remove("flip");
        opened[1].parentElement.classList.remove("flip");

        document.body.style.pointerEvents = "auto";

        opened = [];

        finishGame();
    }, 1200);

    movesCounter();
}

function showResult() {
    console.log("matched list: ", matched);
    const stats = document.querySelector(".modal-content");
    var itemList = "";

    for (let i = 1; i<=2; i++){     // 모달창 하단에 띄울 <p>태그 생성
        const statsElements = document.createElement("p");
        statsElements.classList.add("stats");
        stats.appendChild(statsElements);
    }

    for (let k = 0; k < matched.length; k++) {
        switch (matched[k].alt) {
            case "basket.png":
                itemList += " 장바구니 ";
                break;
            case "bible.png":
                itemList += " 성경 ";
                break;
            case "bicycle.png":
                itemList += " 자전거 ";
                break;
            case "book.png":
                itemList += " 책 ";
                break;
            case "ginseng.png":
                itemList += " 산삼 ";
                break;
            case "mic.png":
                itemList += " 마이크 ";
                break;
            case "soap.png":
                itemList += " 비누 ";
                break;
            case "soapnut.png":
                itemList += " 소프넛 ";
                break;
            case "tumbler.png":
                itemList += " 텀블러 ";
                break;
            case "vitamin.png":
                itemList += " 비타민 ";
                break;
            default:
                break;
        }        
    }

    let p = stats.querySelectorAll("p.stats");

    p[0].innerHTML = "얻은 아이템: ";
    p[1].innerHTML = itemList;
}

//const modal = document.getElementById("finish-modal");
//var modal = new bootstrap.Modal(document.getElementById('finish-modal'))

function displayModal(){
    var myModal = new bootstrap.Modal(document.getElementById('Backdrop'), {
        keyboard: false
    });
    myModal.show();   

}

function winGame(){
    if(matched.length === 16){
        stopTime();
        AddStats();
        displayModal();
    }
}

function finishGame() {
    console.log("finishGame 실행 초:", seconds);
    if(seconds >= 30){
        stopTime();
        showResult();
        displayModal();
    }
}


startGame();

deck.addEventListener("click", function(evt){
    if(evt.target.nodeName === "LI"){
        console.log(evt.target.nodeName + "가 눌렸습니다.");

        if(timeStart === false){
            timeStart = true;
            timer();
        }
        flipCard();
    }

    function flipCard(){
        evt.target.classList.add("flip");
        addToOpened();
    }
    function addToOpened(){
        if(opened.length === 0 || opened.length === 1){
            opened.push(evt.target.firstElementChild);
        }
        compareTwo();
    }
});

/*
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn");

reset.addEventListener('click', resetEverything);


playAgain.addEventListener('click', function () {
    modal.style.display = "none";
    resetEverything();
});
*/