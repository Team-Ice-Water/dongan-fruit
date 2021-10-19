// getUserInfo.js를 통해 정보 받아옴
var endingInfo = {
    // 문화를 바꿔가는 그리스도인 엔딩
    culDay: 0,
    culStage: 0,
    culEnd: 0,
    // 우리 학교는 환경지킴이 엔딩
    envDay: 0,
    envStage: 0,
    envEnd: 0,
    // 청지기 가정 엔딩
    homeDay: 0,
    homeStage: 0,
    homeEnd: 0
}


var ecoLevelInfo = {
    air: 0,
    soil: 0,
    water: 0
}
var ecoSum;

var userInfo = {
    day: 0,
    health: 0
}

// 엔딩 정보 요청
function endingRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getEndingInfo.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let key in json) {
                const value = json[key];
                switch (key) {
                    case 'culDay':  // php에서 echo로 보낸 변수명
                        endingInfo['culDay'] = parseInt(value);
                        break;
                    case 'culStage':
                        endingInfo['culStage'] = parseInt(value);
                        break;
                    case 'culEnd':
                        endingInfo['culEnd'] = parseInt(value);
                        break; 
                    case 'envDay':
                        endingInfo['envDay'] = parseInt(value);
                        break;
                    case 'envStage':
                        endingInfo['envStage'] = parseInt(value);
                        break;
                    case 'envEnd':
                        endingInfo['envEnd'] = parseInt(value);
                        break; 
                    case 'homeDay':
                        endingInfo['homeDay'] = parseInt(value);
                        break;
                    case 'homeStage':
                        endingInfo['homeStage'] = parseInt(value);
                        break; 
                    case 'homeEnd':
                        endingInfo['homeEnd'] = parseInt(value);
                        break;             
                    default:
                        break;
                }
            }
        }
    };
}
endingRequest();

// 오염도 정보 요청
function ecoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getEcoLevel.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let key in json) {
                const value = json[key];
                switch (key) {
                    case 'air':
                        ecoLevelInfo['air'] = parseInt(value);
                        break;
                    case 'soil':
                        ecoLevelInfo['soil'] = parseInt(value);
                        break;  
                    case 'water':
                        ecoLevelInfo['water'] = parseInt(value);
                        break;            
                    default:
                        break;
                }
            }

            ecoSum = ecoLevelInfo['air'] + ecoLevelInfo['soil'] +ecoLevelInfo['water']
        }
    };
}
ecoRequest();

function infoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getUserInfo.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let key in json) {
                const value = json[key]
                switch (key) {
                    case 'day':
                        userInfo['day'] = parseInt(value);
                        break;
                    case 'health':
                        userInfo['health'] = parseInt(value);
                        break;             
                    default:
                        break;
                }
            }
        }
    };
}
infoRequest();

function updateValue(value) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log("응답:", xhr.responseText);
        }
    };
    xhr.open('POST', '../updateEnding.php');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(JSON.stringify(value));
}


/////////////////
function checkEnd() {
    if(endingInfo['culDay'] == 2){
        if(endingInfo['culStage'] == 5){    // culDay == (today + 5) -> DB에 culture_end_count 속성대신 ending false 와 같은 속성이 있어야 함
            location.href="ending.html:culture";
        } else{
            if(ecoSum <= 180){
                updateValue({id: 'culture'});
            }
        }
    } 

    if(endingInfo['envDay'] == 4){
        if(endingInfo['envStage'] == 10){
            location.href="ending.html:school";
        } else{
            if(userInfo['health'] >= 60){
                updateValue({id: 'school'});
            } 
        }
    } 

    if(endingInfo['homeDay'] == 4){
        if(endingInfo['homeStage'] == 5){
            location.href="ending.html:home";
        } else{
            if(ecoSum <= 180){
                updateValue({id: 'home'});
            }
        }
    } 
}

checkEnd();