// Array of Deck of Card Images
const deckCards = ['basket.png', 'basket.png', 'bible.png', 'bible.png', 'bicycle.png', 'bicycle.png', 'book.png', 'book.png','ginseng.png', 'ginseng.png', 'mic.png', 'mic.png', 'soap.png', 'soap.png', 'soapnut.png', 'soapnut.png', 'tumbler.png', 'tumbler.png', 'vitamin.png', 'vitamin.png'];
// 글로벌 배열

// Access the <ul> with class of .deck
const deck = document.querySelector(".deck");

// open된 카드를 저장하는 배열
let opened = [];
// 매칭된 카드를 저장하는 배열
let matched = [];

const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

const wrong = new Audio('../audio/wrong.mp3');
wrong.volume = 0.4;

const correct = new Audio('../audio/correct.mp3');
correct.volume = 0.4;

const end = new Audio('../audio/end.mp3');
correct.volume = 0.7;

const clock = new Audio('../audio/clock.wav');
clock.addEventListener('ended', function() { 
    this.currentTime = 0;
    this.play();
}, false);

var item = {
    tumbler: "0",
    mic: "0",
    basket: "0",
    book: '0', 
    vitamin: "0",
    bicycle: "0", 
    bible: "0", 
    soap: "0", 
    soapnut: "0", 
    ginseng: "0"
}

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
        timeCounter.innerHTML="<i class='fa fa-hourglass-start'></i> 지난 시간: "+ seconds+" 초";
    }, 1000);
}

function stopTime(){
    clearInterval(time);
}

// 열린(클릭된) 두 카드가 매칭하는지를 비교
function compareTwo(){
    // opened 배열에 2개의 카드가 있을 때
    if(opened.length === 2){
        document.body.style.pointerEvents = 'none';
    }

    if(opened.length === 2 && opened[0].src === opened[1].src){
        match();
        correct.play();
        console.log("It's a Match!");
    } 
    else if (opened.length === 2 && opened[0].src != opened[1].src){
        noMatch();
        wrong.play();
        console.log("NO Match!");
    }
}

function match(){
    setTimeout(function() {
        opened[0].parentElement.classList.add("match");
        opened[1].parentElement.classList.add("match");

        matched.push(opened[0]);    // 매칭된 둘은 같은 사진이므로 하나만 넣어줌
        document.body.style.pointerEvents = "auto";

        clearInterval(check);
        finishGame();
        opened = [];
    }, 600);
}

function noMatch() {
    setTimeout(function() {
        opened[0].parentElement.classList.remove("flip");
        opened[1].parentElement.classList.remove("flip");

        document.body.style.pointerEvents = "auto";

        opened = [];

        clearInterval(check);
        finishGame();
    }, 1200);
}

function showResult() {
    console.log("matched list: ", matched);
    var itemList = "";

    for (let k = 0; k < matched.length; k++) {
        switch (matched[k].alt) {
            case "basket.png":
                itemList += " 장바구니 ";
                item['basket'] = 1;
                break;
            case "bible.png":
                itemList += " 성경 ";
                item['bible'] = 1;
                break;
            case "bicycle.png":
                itemList += " 자전거 ";
                item['bicycle'] = 1;
                break;
            case "book.png":
                itemList += " 책 ";
                item['book'] = 1;
                break;
            case "ginseng.png":
                itemList += " 산삼 ";
                item['ginseng'] = 1;
                break;
            case "mic.png":
                itemList += " 마이크 ";
                item['mic'] = 1;
                break;
            case "soap.png":
                itemList += " 비누 ";
                item['soap'] = 1;
                break;
            case "soapnut.png":
                itemList += " 소프넛 ";
                item['soapnut'] = 1;
                break;
            case "tumbler.png":
                itemList += " 텀블러 ";
                item['tumbler'] = 1;
                break;
            case "vitamin.png":
                itemList += " 비타민 ";
                item['vitamin'] = 1;
                break;
            default:
                break;
        }        
    }

    $('.item').text(itemList);
}

function displayModal(){
    var myModal = new bootstrap.Modal(document.getElementById('finishModal'), {
        keyboard: false
    });
    myModal.show();
    end.play();
}

function finishGame() {
    if((seconds >= 30)||(matched.length == 10)){
        // 시간이 다 되었거나, 모든 카드를 찾았으면
        clock.pause();
        clearInterval(check);

        stopTime();
        showResult();
        displayModal();

        itemRequest(JSON.stringify(item));
    }
}


// php에 전송
function itemRequest(data) {
    console.log("전송");
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            $('.Btn>a').removeClass('disabled');
            $('.Btn>a').removeAttr('aria-disabled');
            $('.Btn>a').text("청지기 1일차 시작하기");
            // $('.Btn').html('<a class="btn btn-primary fs-5" href="main.html" role="button">청지기 1일차 시작하기</a>');             
        }
    };
    xhr.open('POST', '../finishGame.php');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(data);
}


/////////////////

startGame();

deck.addEventListener("click", function(evt){
    if(evt.target.nodeName === "LI"){
        console.log(evt.target.nodeName + "가 눌렸습니다.");

        if(timeStart === false){
            timeStart = true;
            clock.play();
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

// 가만히 있어도 시간이 지나면 게임은 종료되어야 함
var check = setInterval(finishGame , 2000);