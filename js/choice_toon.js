var userInfo = [
    // {name: '테스트', day: 2, health: 80, ctype: 'woman1', air: 0, soil: 0, water: 0}, ....
]

const toonFile = {
    man1: 'toon/man1.png',
    man2: 'toon/man2.png',
    man3: 'toon/man3.png',
    man4: 'toon/man4.png',
    man5: 'toon/man5.png',
    man6: 'toon/man6.png',
    woman1: 'toon/woman1.png',
    woman2: 'toon/woman2.png',
    woman3: 'toon/woman3.png',
    woman4: 'toon/woman4.png',
    woman5: 'toon/woman5.png',
    woman6: 'toon/woman6.png',
}

// 1. 캐릭터 정보 불러옴
// 2. html에 정보 셋팅
// 3. 결정하기 누르면, php전달하여 session 변수 생성

function infoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getAllInfo.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);
            console.log("받은 정보(json): ", json);

            for (let i = 0; i < json.length; i++) {
                var user = {
                    name: '', 
                    day: 0, 
                    health: 0, 
                    ctype: '', 
                    air: 0, 
                    soil: 0, 
                    water: 0
                }

                user['name'] = json[i]['name'];
                user['day'] = json[i]['day'];
                user['health'] = json[i]['health'];
                user['ctype'] = json[i]['ctype'];
                user['air'] = json[i]['air'];
                user['soil'] = json[i]['soil'];
                user['water'] = json[i]['water'];

                userInfo.push(user);
            };

            console.log('저장된 사용자 정보:', userInfo);
            makeSlide();
        }
    };
}

infoRequest();

function makeSlide() {
    console.log("makeSlide");

    if(userInfo.length == 0){
        alert("사용할 수 있는 캐릭터가 없습니다. \n 캐릭터 생성 페이지로 이동합니다.");
        location.href = 'character.html';
    } else{
        // 1. <div class="carousel-inner">의 자식으로 <div class="carousel-item"> 생성
        // 2. 1번의 자식으로 <section class="toon-slide"> 생성 -> 정보에 맞게

        for (let i = 0; i < userInfo.length; i++) {
            
            // 하단의 순서 알려주는 막대 생성
            if(i == 0){
                $('.carousel-indicators').append('<button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>');

                var div = $('<div class="carousel-item active"></div>');

            } else{
                $('.carousel-indicators').append('<button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="'+i+'" aria-label="Slide '+i+'"></button>');

                var div = $('<div class="carousel-item"></div>');
            };

            var section = $('<section class="toon-slide"></section>');

            var img = $('<img src="img/toon/'+userInfo[i].ctype+'.png" class="d-block" alt="캐릭터 사진">');
        
            var caption = $('<div class="caption fs-5"> <p class="name fs-4">'+userInfo[i].name+'</p> <p>'+userInfo[i].day+'일차</p> <p>체력:'+userInfo[i].health+'</p> <p>수질오염도: '+userInfo[i].water+'</p> <p>대기오염도: '+userInfo[i].air+'</p> <p>토양오염도: '+userInfo[i].soil+'</p> </div>');
        
            section.append(img);
            section.append(caption);

            div.append(section);
        
            // php에서 받아온 배열은 나중에 만들어진 캐릭터 정보부터 있어서 맨 앞에 저장됨(prepend 사용)
            $('.carousel-inner').prepend(div);   
        }
    }   
        
}

// html에서 결정하기 버튼 누르면 아래 함수 수행
function saveToon() {
    var character = $('.carousel-item.active .name').text();
    console.log("클릭한 것: ", character);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../setCharacter.php');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(JSON.stringify({name: character}));
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log("응답:", xhr.responseText);
        }
    };
}