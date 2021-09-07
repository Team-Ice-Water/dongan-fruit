/* 날짜, 캐릭터, 상태바, 창문 띄우는 JS */
const day = document.querySelector(".day");
const toonSection = document.querySelector(".character");
const windowSection = document.querySelector(".window");

const soilLevel = document.getElementById("soil");
const waterLevel = document.getElementById("water");
const airLevel = document.getElementById("air");
const healthLevel = document.getElementById("health");

const ecoLevel = {
    air: 0,
    soil: 0,
    water: 0
}

const userInfo = {
    day: 0,
    health: 0,
    ctype: 'man1'
}

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


// 캐릭터, 창문 등을 띄울 이미지 태그를 만드는 함수
function makeImg(section, file, type) {
    const newImage = document.createElement("IMG");
    newImage.setAttribute('src', 'img/' + file);
    newImage.setAttribute('id', type);
    newImage.setAttribute('alt', 'image of ' + file);
    section.appendChild(newImage);
}


// 가져온 정보를 바탕으로 상태바 생성
function changeAttr(variable, list, type) {
    variable.setAttribute('style', 'width: '+ list[type]+'%');
    variable.setAttribute('aria-valuenow', list[type]);
}

function setEcoLevel() {
    changeAttr(soilLevel, ecoLevel, 'soil');
    changeAttr(waterLevel, ecoLevel, 'water');
    changeAttr(airLevel, ecoLevel, 'air');
}

// 상태바의 건강, 날짜 생성
function setUserInfo() {
    changeAttr(healthLevel, userInfo, 'health');
    day.innerHTML = userInfo['day']+'일';    
}

// 창문 이미지 고르기
function setEcoState() {
    var img = 'window/aws70-.png';

    if (ecoLevel['air'] < 70){
        if(ecoLevel['water'] < 70){
            if(ecoLevel['soil'] < 70){
                img = "window/aws70-.png";
            }
            else if(ecoLevel['soil'] >= 70){
                img = "window/s70+aw70-.png";
            }
        } else if (ecoLevel['water'] >= 70){
            if(ecoLevel['soil'] < 70){
                img = "window/w70+as70-.png";
            }
            else if(ecoLevel['soil'] >= 70){
                img = "window/ws70+a70-.png";
            }
        }
    }
    else if (ecoLevel['air'] >= 70){
        if(ecoLevel['water'] < 70){
            if(ecoLevel['soil'] < 70){
                img = "window/a70+ws70-.png";
            }
            else if(ecoLevel['soil'] >= 70){
                img = "window/as70+w70-.png";
            }
        } else if (ecoLevel['water'] >= 70){
            if(ecoLevel['soil'] < 70){
                img = "window/aw70+s70-.png";
            }
            else if(ecoLevel['soil'] >= 70){
                img = "window/aws70+.png";
            }
        }
    }
    makeImg(windowSection, img, 'window');
}


// 가져온 정보를 바탕으로 캐릭터 띄움
function setToon() {
    for (let key in toonFile) {
        if(key == userInfo['ctype']){
            const file = toonFile[key];
            makeImg(toonSection, file, 'character');
        }        
    }
}


// 상태바에 수치(%) 표시
function showLevel(id) {
    var level = id.getAttribute('aria-valuenow');
    id.innerHTML = level+"%";
}


// 상태바의 오염도 정보 요청
function ecoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getEcoLevel.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let jkey in json) {
                for (let ekey in ecoLevel) {
                    if(jkey == ekey){
                        const jvalue = json[jkey]
                        ecoLevel[ekey] = parseInt(jvalue)
                        break
                    } 
                }
            }
        }
        setEcoLevel();
        if(windowSection){  //창문 태그가 있으면 (=메인 화면에서 호출되었으면)
            setEcoState();
        }
        showLevel(soilLevel);
        showLevel(waterLevel);
        showLevel(airLevel);
    };
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
                const value = json[key]
                switch (key) {
                    case 'day':
                        userInfo['day'] = parseInt(value);
                        break;
                    case 'health':
                        userInfo['health'] = parseInt(value);
                        break;
                    case 'ctype':
                        userInfo['ctype'] = value;
                        setToon();
                        break;                
                    default:
                        break;
                }
            }
        }
        setUserInfo();
        showLevel(healthLevel);
    };
}

ecoRequest();
infoRequest();