const ending = [
  {
    id: "culture",
    success: true,
    text: "너는 너의 일상 속에서 나의 창조세계를 아름답게 하기 위해 힘썼구나, 너의 모습을 보면서 다른 친구들도 이 창조세계가 중요하다는 것을 깨달아 가는 듯 하구나. \n 환경을 파괴하는 문화들을 환경을 보호하는 문화로 바꾸어주어서 고맙다. \n 너는 진정한 나의 청지기구나.",
  },
  {
    id: "school",
    success: true,
    text: "교회와 가정에서 뿐만 아니라 학교에서도 청지기적 모습을 실천하기 위해 애쓰는 모습이 참으로 기특하구나. \n 환경 지킴이가 된 너희 학교를 본받아서 다른 많은 학교들도 환경을 열심히 지킬 수 있게 되었단다. 아주 훌륭한 환경 지킴이 학교가 되어주어서 고맙구나.",
  },
  {
    id: "home",
    success: true,
    text: "너의 가정은 참으로 훌륭한 청지기 가정이구나. \n 온 가족이 자발적 불편함을 선택해준 덕분에 주변에 다른 가정들도 올바른 모습을 배울 수 있었단다. 이 창조세계를 지키기 위해 모든 가족이 함께 힘써줘서 고맙다. ",
  },
  {
    id: "air",
    success: false,
    text: "청지기의 역할을 잘 감당하지 못해서 대기오염이 너무 심해졌구나. 대기오염이 심해지면 이렇게 지구가 많이 더워진단다. \n 지금도 지구가 많이 덥지? 다시 기회를 줄 테니 다시 한 번 청지기로서 잘 살아가 보렴.",
  },
  {
    id: "water",
    success: false,
    text: "청지기의 역할을 잘 감당하지 못해서 수질오염이 너무 심해졌구나. \n 수질오염이 심해져서 전세계 사람들이 마실 물이 없어졌단다. 다시 기회를 줄 테니 다시 한 번 청지기로서 잘 살아가보렴.",
  },
  {
    id: "soil",
    success: false,
    text: "청지기의 역할을 잘 감당하지 못해서 토양오염이 너무 심해졌구나. \n토양오염이 심해져서 지구는 식물이 살지 못하는 땅이 되었단다. 다시 기회를 줄 테니 다시 한 번 청지기로서 잘 살아가보렴.",
  },
  {
    id: "earth",
    success: false,
    text: "청지기의 역할을 잘 감당하지 못해서 모든 오염이 너무 심해졌구나. \n모든 오염도가 너무 심해져서 지구가 버티지 못하고 멸망해 버렸단다. 다시 기회를 줄 테니 다시 한 번 청지기로서 잘 살아가보렴.",
  },
  {
    id: "health",
    success: false,
    text: "청지기의 역할에만 너무 집중하다가 너의 몸을 돌보지 못했구나. \n열심히 하는 것은 좋지만 너의 몸을 잘 돌보면서 행복하게 살아갔으면 좋겠구나. 다시 기회를 줄 테니 다시 한 번 청지기로서 잘 살아가보렴.",
  },
  {
    id: "normal",
    success: true,
    text: "청지기의 역할을 잘 감당했구나. 덕분에 지구가 많이 살기 좋아졌단다. \n 하지만 혼자 노력하는 것이 아니라 다른 사람들과 함께 협력해 보면 어떻겠니? 그럼 더 좋을 것 같구나.",
  },
  { id: "test", success: true, text: "끝났다 ~" },
];

var successModal = new bootstrap.Modal(document.getElementById("gamesuccess"), {
  keyboard: false,
});

var failModal = new bootstrap.Modal(document.getElementById("gameover"), {
  keyboard: false,
});

var user_name;

function nameRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/getUserName.php");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

      for (let key in json) {
        const value = json[key];
        switch (key) {
          case "name":
            user_name = value;
            break;
          default:
            break;
        }
      }
    }
  };
}

function endingSend(value) {
  console.log("엔딩 종류(보내는 데이터): ", value);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../php/ending.php");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(value));
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
}

function done() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/logout.php");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      location.replace("index.html");
    }
  };
}

function noBack() {
  window.history.forward();
} // 뒤로가기 금지

$(document).ready(function () {
  const typingSound = new Audio("../audio/typing.wav");

  const temp = location.href.split("?");
  const data = temp[1]; // 엔딩 페이지에 진입하면, 어떤 엔딩인지 DB에 저장(ending_type 속성)
  endingSend({ type: data });
  var content; // 적힐 내용을 저장하는 문자열

  for (let value of ending) {
    if (value["id"] == data) {
      $("body").css(
        "background",
        "url('../img/ending/" + data + ".png') no-repeat center/cover"
      );
      $("body").css("height", "100vh");
      content = value["text"];
      if (value["success"] == true) {
        // typing 함수에서 어떤 모달을 띄울지
        var interval = setInterval(function () {
          typing(successModal);
        }, 180); // .text 에 글쓰기
      } else {
        var interval = setInterval(function () {
          typing(failModal);
        }, 180);
      }
    }
  }

  const text = document.querySelector(".text");
  let i = 0;

  function typing(modal) {
    typingSound.play();
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i >= content.length) {
      typingSound.pause();
      clearInterval(interval);
      $(".blink").remove(); // 깜빡이는 커서 삭제
      setTimeout(() => modal.show(), 1500);
    }
  }
});
