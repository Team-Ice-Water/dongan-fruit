var characterInfo = [
    // {name: '테스트', ending: 'water'}, ....
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
            makeCard();
        }
    };
}

infoRequest();

function makeCard() {

    if(characterInfo.length == 0){
        var text = $('<p class="fs-4 mx-auto mt-5 text-muted">아직 엔딩을 본 캐릭터가 없습니다.</p>')
        $('.card-section').append(text);
    } else{
        for (let i = 0; i < characterInfo.length; i++) {
            var item = $(`
            <div class="card shadow">
                <img src="img/ending/`+characterInfo[i].type+`.png" class="card-img-top" alt="`+characterInfo[i].type+`">
                <div class="card-body">
                    <p class="card-text text-center">`+characterInfo[i].name+`</p>
                </div>
            </div>`);

            $('.card-section').append(item);   
        }
    }   
        
}