var characterInfo = [
    // {name: '테스트', ending: 'water'},
    // {name: '안녕', ending: 'normal'} ....
]

// 1. 캐릭터 정보 불러옴
// 2. html에 정보 셋팅

function infoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getEnding.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);
            console.log("받은 정보(json): ", json);

            for (let i = 0; i < json.length; i++) {
                var user = {
                    name: '', 
                    ending_type: '',
                }

                user['name'] = json[i]['name'];
                user['ending_type'] = json[i]['type'];

                characterInfo.push(user);
            };

            console.log('캐릭터 엔딩 정보:', characterInfo);
            switch ($('title').text()) {
                case '엔딩 모음':
                    console.log("엔딩 모음 함수 실행");
                    makeCard();
                    break;
                case '모든 엔딩':
                    console.log("모든 엔딩 함수 실행");
                    setImg();
                    break;
                default:
                    break;
            }
        }
    };
}

infoRequest();

function changeTxt(type) {
    switch (type) {
        case 'earth':
            return "지구 멸망 엔딩";
        case 'air':
            return "찜통 지구 엔딩";
        case 'water':
            return "물 부족 지구 엔딩";
        case 'soil':
            return "황량한 지구 엔딩";
        case 'health':
            return "체력 고갈 엔딩";
        case 'normal':
            return "기본 엔딩";
        case 'culture':
            return "문화를 바꿔가는 그리스도인 엔딩";
        case 'school':
            return "우리 학교는 환경지킴이 학교 엔딩";
        case 'home':
            return "청지기 가정 엔딩";
        default:
            break;
    }
}

function makeCard() {     // 엔딩 모음 페이지(collection.html)에서 사용할 함수

    if(characterInfo.length == 0){
        var text = $('<p class="fs-4 mx-auto mt-5 text-muted">아직 엔딩을 본 캐릭터가 없습니다.</p>')
        $('.card-section').append(text);
    } else{
        for (let i = 0; i < characterInfo.length; i++) {
            var ending = characterInfo[i].ending_type;
            var item = $(`
            <div class="card shadow">
                <img src="img/ending/`+ending+`.png" class="card-img-top" alt="`+ending+`">
                <div class="card-body">
                    <p class="card-text text-center fs-4">`+characterInfo[i].name+`<br/>
                    <span class="fs-5 highlight">`+changeTxt(ending)+`</span></p>
                </div>
            </div>`);

            $('.card-section').append(item);   
        }
    }   
        
}

function setImg() {     // 모든 엔딩 페이지(allEnding.html)에서 사용할 함수
    if(characterInfo.length > 0){
        for (let i = 0; i < characterInfo.length; i++) {
            var ending = characterInfo[i].ending_type;
            console.log("for문 엔딩: ", ending+changeTxt(ending));
            $("#"+ending+">img").attr('src',"img/ending/"+ending+".png");
            console.log($("#"+ending+">.card-body>p").text());
            $("#"+ending+">.card-body>p").text(changeTxt(ending));
        }
    }
}