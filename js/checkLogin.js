function loginChcek() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/checkLogin.php");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      if (xhr.responseText == "notLogin") {
        alert(
          "로그인하지 않고 접근할 수 없는 페이지입니다. 먼저 로그인 해주세요."
        );
        location.href = "/";
      }
    }
  };
}

loginChcek();
