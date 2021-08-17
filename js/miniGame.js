// Array of Deck of Card Images
const deckCards = ['basket.png', 'basket.png', 'bible.png', 'bible.png', 'bicycle.png', 'bicycle.png', 
            'mic.png', 'mic.png', 'soap.png', 'soap.png', 'soapnut.png', 'soapnut.png', 'tumbler.png', 'tumbler.png', 'vitamin.png', 'vitamin.png'];
// 글로벌 배열

// Access the <ul> with class of .deck
const deck = document.querySelector(".deck");

// open된 카드를 저장하는 배열
let opened = [];
// 매칭된 카드를 저장하는 배열
let matched = [];

const modal = document.getElementById("modal");
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn");
// moves-counter 클래스 선택 and change it's HTML
const movesCount = document.querySelector(".moves-counter");

// move counter(움직임 횟수)를 위한 변수
let moves = 0;

const star = document.getElementById("star-rating").querySelectorAll(".star");
let starCount = 3;

const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

const TWO_STAR_LIMIT = 14;
const ONE_STAR_LIMIT = 18;

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()*currentIndex)
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
        addImage.setAttribute('alt', 'image of vault boy from fallout');
        // deck <ul>에 새로운 <li> 업데이트
        deck.appendChild(liTag);

    }
}

startGame();

function removeCard(){
    // As long as <ul> deck has a child node, remove it
    while(deck.hasChildNodes()){
        deck.removeChild(deck.firstChild)
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

// 모든 전역 변수들과 HTMl 요소( 타이머, 별점, 이동 횟수)를 초기화시켜준다.
function resetEverything(){
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML="<i class='fa fa-hourglass-start'></i>"+" Timer: 00:00";
    
    // 별점을 초기화하고 재시작
    star[1].firstElementChild.classList.add("fa-star");
    star[2].firstElementChild.classList.add("fa-star");
    starCount = 3;

    moves = 0;
    movesCount.innerHTML = 0;

    // opned와 매칭된 카드를 저장하는 배열 초기화
    matched = [];
    opened = [];

    // Clear the deck
    removeCard();

    // Create a new deck
    startGame();
}

function movesCounter() {
    movesCount.innerHTML++;
    moves++;
}

function starRating(){
    // 많이 움직일수록 별점 감소
    if (moves === TWO_STAR_LIMIT){
        star[2].firstElementChild.classList.remove("fa-star");
        starCount--;
    }

    if (moves === ONE_STAR_LIMIT){
        star[1].firstElementChild.classList.remove("fa-star");
        starCount--;
    }
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

        matched.push(...opened);
        document.body.style.pointerEvents = "auto";

        winGame();
        opened = [];
    }, 600);

    movesCounter();
    starRating();
}

function noMatch() {
    setTimeout(function() {
        opened[0].parentElement.classList.remove("flip");
        opened[1].parentElement.classList.remove("flip");

        document.body.style.pointerEvents = "auto";

        opened = [];
    }, 1200);

    movesCounter();
    starRating();
}


// 시간, 움직인 횟수, 별점 통계 (모달창에 띄울)
function AddStats() {
    const stats = document.querySelector(".modal-content");

    for (let i = 1; i<=3; i++){
        const statsElements = document.createElement("p");
        statsElements.classList.add("stats");
        stats.appendChild(statsElements);
    }

    let p = stats.querySelectorAll("p.stats");

    p[0].innerHTML = "완료한 시간: "+ minutes + " 분 "+seconds+" 초";
    p[1].innerHTML = "움직인 횟수: "+ moves;
    p[2].innerHTML = "당신의 별점은: 3개 중 "+ starCount;
}

function displayModal(){
    const modalClose = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    modalClose.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none"
        }
    };

}


function winGame(){
    if(matched.length === 16){
        stopTime();
        AddStats();
        displayModal();
    }
}

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

reset.addEventListener('click', resetEverything);

playAgain.addEventListener('click', function () {
    modal.style.display = "none";
    resetEverything();
});