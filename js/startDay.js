const state = [
  {
    id: "basic_health",
    text: "자고 일어났더니 체력이 보충되었어요.",
    health: 5,
  },
  {
    id: "bad_health",
    text: "체력이 40 이하로 떨어져 병에 걸렸어요.<br>병을 방치하면 이제 매일 체력이 줄어들어요.",
    health: -2,
  },
  {
    id: "basic_nature",
    text: "지구가 아픈 상태이기 때문에 점점 상황이 나빠지고 있어요.",
    water: 5,
    air: 5,
    soil: 5,
  },
  {
    id: "good_nature",
    text: "오염수치가 낮아졌어요. 지구의 상태가 좋아지고 있어요!",
    water: 3,
    air: 3,
    soil: 3,
  },
  {
    id: "bad_nature",
    text: "오염 수치가 높아요. 지구의 상태가 급격하게 나빠지고 있어요.",
    water: 7,
    air: 7,
    soil: 7,
  },
  {
    id: "bad_pollution",
    text: "환경 오염이 심각해져서 건강에도 문제가 생기고 있어요.",
    health: -1,
  },
  {
    id: "good_pollution",
    text: "요즘 지구의 환경이 너무 좋아요. 건강이 좋아지는 기분이에요.",
    health: 1,
  },
  {
    id: "flowerpot",
    text: "미약하지만 화분의 공기정화식물이 공기를 조금 좋게 만들었어요.",
    air: -2,
  },
];

var total = 0;
var totalHealth = 0;

var ecoLevel = {
  air: 0,
  soil: 0,
  water: 0,
};

var userInfo = {
  day: 0,
  health: 0,
};

var flowerpot = false;

var getEcoLevel = false;
var getInfo = false;
var isSend = false;

const typingSound = new Audio("../audio/typing.wav");

const morning = new Audio("../audio/morning.mp3");
morning.volume = 0.4;
morning.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

// navbar.js 에서 아이콘 클릭에 따라 아래의 두 함수 호출하게 됨
function mutebgm() {
  $("#play").html(`<a class="nav-link" href="#" onclick="playbgm();">
    <span class="material-icons fs-2">volume_off</span>
    </a>`);
  console.log("mute됨");
  morning.pause();
}

function playbgm() {
  $("#play").html(`<a class="nav-link" href="#" onclick="mutebgm();">
    <span class="material-icons fs-2">volume_up</span>
    </a>`);
  console.log("재생됨");
  morning.play();
}

// 전날 오염도 정보 요청
function ecoRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/getEcoLevel.php");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

      for (let key in json) {
        const value = json[key];
        switch (key) {
          case "air":
            ecoLevel["air"] = parseInt(value);
            break;
          case "soil":
            ecoLevel["soil"] = parseInt(value);
            break;
          case "water":
            ecoLevel["water"] = parseInt(value);
            break;
          default:
            break;
        }
      }

      getEcoLevel = true;
      // 오염도, 체력을 다 받아왔으면 실행
      // 중복 실행 방지를 위해 sendValue()를 실행하면 true가 되는 변수 isSend 활용
      if (getEcoLevel && getInfo && !isSend) {
        sendValue();
      }
    }
  };
}

// 전날 건강, 날짜 등 캐릭터 정보 요청
function infoRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/getUserInfo.php");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

      for (let key in json) {
        const value = json[key];
        switch (key) {
          case "day":
            userInfo["day"] = parseInt(value);
            $(".title").text(userInfo["day"] + " 일차의 하루가 밝았다.");
            if (userInfo["day"] > 5) {
              $(".goBtn").html(
                '<button type="button" class="btn btn-light" onclick="skip();"> 타이핑 스킵 </button>'
              );
            }
            break;
          case "health":
            userInfo["health"] = parseInt(value);
            break;
          default:
            break;
        }
      }

      getInfo = true;
      if (getEcoLevel && getInfo && !isSend) {
        sendValue();
      }
    }
  };
}

// 아이템 정보 요청
function itemRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/getItemInfo.php");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);
      for (let key in json) {
        const value = json[key];
        switch (key) {
          case "flowerpot":
            flowerpot = parseInt(value);
            break;
          default:
            break;
        }
      }
    }
  };
}

function changeRequest(data) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("응답:", xhr.responseText);
    }
  };
  xhr.open("POST", "../php/doSchedule.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}

function findItem(id) {
  for (let value of state) {
    if (value["id"] == id) {
      return value;
    }
  }
}

function sendValue() {
  console.log(">>> sendValue flower 값: ", flowerpot);

  // 자고 일어나면
  changeRequest(findItem("basic_health")); // 체력 +5
  findItem("basic_health").filtered = true;

  const totalLevel = ecoLevel["air"] + ecoLevel["water"] + ecoLevel["soil"];
  console.log("대기오염도: ", ecoLevel["air"]);
  console.log("수질오염도: ", ecoLevel["water"]);
  console.log("토양오염도: ", ecoLevel["soil"]);
  console.log("오염도 총합: ", totalLevel);
  console.log("체력: ", userInfo["health"]);

  /* 오염도 변동 */
  if (totalLevel < 50) {
    if (totalLevel < 30) {
      changeRequest(findItem("good_pollution")); // 체력+1
      findItem("good_pollution").filtered = true;
    }
    changeRequest(findItem("good_nature")); // 오염도+3
    findItem("good_nature").filtered = true;
  } else if (170 < totalLevel) {
    changeRequest(findItem("bad_nature")); // 오염도+7
    findItem("bad_nature").filtered = true;
  } else {
    changeRequest(findItem("basic_nature")); //오염도 +5
    findItem("basic_nature").filtered = true;
  }

  /* 체력 변동 */
  if (
    70 < ecoLevel["air"] ||
    70 < ecoLevel["water"] ||
    70 < ecoLevel["soil"] ||
    200 < totalLevel
  ) {
    changeRequest(findItem("bad_pollution")); // 체력-1
    findItem("bad_pollution").filtered = true;
  }

  if (userInfo["health"] <= 40) {
    changeRequest(findItem("bad_health")); // 체력-2
    findItem("bad_health").filtered = true;
  }

  /* 화분 정화 작용 */
  if (flowerpot != 0) {
    console.log("flowerpot 값: ", flowerpot);
    changeRequest(findItem("flowerpot")); // 대기-2
    findItem("flowerpot").filtered = true;
  }

  console.log("state 리스트: ", state);

  isSend = true; // 정보를 다 받아온 뒤 실행하기 위한 장치
  /* 적용된 object에 대해 태그 생성 후 내용 작성 */
  makeLI();
}

const typingtxt = document.querySelector(".typing-txt").querySelector("ul");
const typing = document.querySelector(".typing").querySelector("ul");

function makeLI() {
  var filteredIdx = []; // filtered 가 있는, 적용된 state의 인덱스만 저장하는 배열
  var num = 0;

  state.forEach(function (value) {
    if ("filtered" in value) {
      filteredIdx.push(num);
    }
    num++;
  });

  console.log("적용된 state 개수: ", filteredIdx);

  for (let i = 0; i < filteredIdx.length; i++) {
    // <li> 태그 생성
    const liTag = document.createElement("LI");
    const infoTag = document.createElement("LI");
    infoTag.classList.add("info");

    //$('.typing') 에는 내용이 적히면 안된다.
    //setText(state[filteredIdx[i]], liTag, infoTag);

    typing.appendChild(liTag);
    typing.appendChild(infoTag);

    const liTag2 = document.createElement("LI");
    const infoTag2 = document.createElement("LI");
    infoTag2.classList.add("info");
    setText(state[filteredIdx[i]], liTag2, infoTag2);

    typingtxt.appendChild(liTag2);
    typingtxt.appendChild(infoTag2);
  }
}

function setText(obj, tag, nexttag) {
  tag.innerHTML = obj["text"];

  /* 수치 변동 사항 멘트를 지정한다. */
  var text = "";

  if ("health" in obj) {
    if (obj["health"] < 0) {
      text = "체력 " + Math.abs(obj["health"]) + " 감소";
      totalHealth += obj["health"];
    } else {
      text = "체력 " + obj["health"] + " 증가";
      totalHealth += obj["health"];
    }
  }

  /* 오염도가 변하면 3가지가 똑같은 수치로 변경되어서, 하나만 체크해도 됨 */
  if ("water" in obj) {
    if (text !== "") {
      text += ",";
    }

    if (obj["water"] < 0) {
      text += " 각 오염도 " + Math.abs(obj["water"]) + " 감소";
      total += obj["water"];
    } else {
      text += " 각 오염도 " + obj["water"] + " 증가";
      total += obj["water"];
    }
  }

  if (obj["id"] == "flowerpot") {
    text += "  대기 오염도 2 감소";
  }

  /* 다음 줄에 변동사항을 적는다. */
  nexttag.innerText = text;
}

var tyInt;

function startTyping() {
  // 출처: https://gahyun-web-diary.tistory.com/2
  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;

  // 타이핑될 텍스트를 가져온다
  // <br>태그까지 가져와야 하므로 text()가 아니라 html()로
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).html();
  console.log("typingTxt: ", typingTxt);
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    typingSound.play();
    console.log("liIndex: ", liIndex);
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      //console.log($(".typing ul li").text());
      if (typingTxt[typingIdx] === "<") {
        $(".typing ul li").eq(liIndex).append("<br/>");
        typingIdx = typingIdx + 4;
      } else {
        $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
        typingIdx++;
      }
    } else {
      if (liIndex < liLength - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).html();

        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        typingSound.pause();
        //타이핑종료

        setTimeout(function () {
          //1초후에 다시 타이핑 반복 시작
          tyInt = setInterval(typing, 100);
        }, 1000);
      } else if (liIndex == liLength - 1) {
        //마지막 문장까지 써지면 반복 종료
        clearInterval(tyInt);
        // 커서 깜빡이는거 종료
        $(".typing ul li").removeClass("on");
        // 효과음 종료
        typingSound.pause();
        // 총 변화를 보여주는 텍스트 띄우기
        showTotal();
        $(".goBtn").html(
          '<a href="main.html" role="button" class="btn btn-light"> 방으로 가기 </a>'
        );
      }
    }
  }
}

/* 총 변동사항을 적는 함수*/
function showTotal() {
  var text = "총 ";

  if (totalHealth < 0) {
    text += "체력 " + Math.abs(totalHealth) + " 감소";
  } else {
    text += "체력 " + totalHealth + " 증가";
  }

  if (total != 0) {
    if (total < 0) {
      text += ", 각 오염도 " + Math.abs(total) + " 감소";
    } else {
      text += ", 각 오염도 " + total + " 증가";
    }
  }

  $(".total").text(text);
  $(".total").css("background-color", "rgba( 255, 255, 255, 0.6 )");
}

function skip() {
  console.log("스킵 눌림");
  typingSound.pause();
  // 효과 적용된 부분을 감추고, 효과 인터벌 삭제
  $(".typing").css("display", "none");
  clearInterval(tyInt);

  // 미리 적혀있던 부분 보여주기
  $(".typing-txt").css("display", "table");
  showTotal();

  $(".goBtn").html(
    '<a href="main.html" role="button" class="btn btn-light"> 방으로 가기 </a>'
  );
}

/* 비교를 위한 값 요청*/
itemRequest();
ecoRequest();
infoRequest();
/* 비교 후 해당되는 정보 전송
sendValue();    // 정보 받아온 뒤 실행해야 해서, ajax 결과에 따라 실행 
*/

// 화면 전환 효과가 끝나고 텍스트의 타이핑 효과가 시작
setTimeout(() => {
  startTyping();
  morning.play();
}, 3000);
