const userInfo = {
    day: 0,
    health: 0
}

const endingInfo = {
    // 문화를 바꿔가는 그리스도인 엔딩
    culDay: 0,
    culStage: 0,
    // 우리 학교는 환경지킴이 엔딩
    envDay: 0,
    envStage: 0,
    // 청지기 가정 엔딩
    homeDay: 0,
    homeStage: 0
}

// 상태바의 건강, 날짜 등 캐릭터 정보 요청
function infoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getUserInfo.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let key in json) {
                const value = json[key];
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
                    case 'culDay':
                        endingInfo['culDay'] = parseInt(value);
                        break;
                    case 'culStage':
                        endingInfo['culStage'] = parseInt(value);
                        break; 
                    case 'envDay':
                        endingInfo['envDay'] = parseInt(value);
                        break;
                    case 'envStage':
                        endingInfo['envStage'] = parseInt(value);
                        break; 
                    case 'homeDay':
                        endingInfo['homeDay'] = parseInt(value);
                        break;
                    case 'homeStage':
                        endingInfo['homeStage'] = parseInt(value);
                        break;             
                    default:
                        break;
                }
            }
        }
    };
}

// 테스트 함수 (지워도 됨)
function check() {
    console.log('현재 날짜: ', userInfo['day']);
    console.log('건강 상태: ', userInfo['health']);
    console.log('문화엔딩- 날짜: ', endingInfo['culDay']);
    console.log('청지기엔딩- 단계: ', endingInfo['homeStage']);

    if(3 < userInfo['day'] < 5){
        console.log('3~5일 사이임');
    } else{
        console.log('아님');
    }
};

// 가장 먼저 호출해주어야 정보가 저장된다 !
infoRequest();
// 호출해서 정보 셋팅 후에 그 정보 이용 가능
check();

