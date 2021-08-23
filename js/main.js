/* 이미지 */
const itemSection = document.querySelector(".item");
const windowSection = document.querySelector(".window");
const getInfo = false;

const itemList = {
    tumbler: "0",
    flowerpot: "0",
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

const itemFile = {
    tumbler: 'tumbler.png',
    flowerpot: 'flowerpot.png',
    mic: 'mic.png',
    basket: 'basket.png',
    book: 'book.png', 
    vitamin: 'vitamin.png',
    bicycle: 'bicycle.png', 
    bible: 'bible.png', 
    soap: 'soap.png', 
    soapnut: 'soapnut.png', 
    ginseng: 'ginseng.png'
}

const ecoLevel = {
    air: 0,
    soil: 0,
    water: 0
}

// 받아온 값을 기반으로 아이템 이미지 생성
function addItem(obj) {
    console.log('additem 실행')
    for (let key in obj) {
        const value = obj[key]
        if(value == "1"){  // true이면
            const file = itemFile[key]
            const newImage = document.createElement("IMG");
            newImage.setAttribute('src', 'img/' + file);
            newImage.setAttribute('id', key);
            newImage.setAttribute('alt', 'image of ' + file);
            itemSection.appendChild(newImage);
        }
    }  
}

// 창문 이미지 고르기
function setEcoState() {
    if (ecoLevel['air'] < 70){
        if(ecoLevel['water'] < 70){
            if(ecoLevel['soil'] < 70){
                const img = "aws70-.png"
                addWindow(img)
            }
            else if(ecoLevel['soil'] >= 70){
                const img = "s70+aw70-.png"
                addWindow(img)
            }
        }
        else if (ecoLevel['water'] >= 70){
            if(ecoLevel['soil'] < 70){
                const img = "w70+as70-.png"
                addWindow(img)
            }
            else if(ecoLevel['soil'] >= 70){
                const img = "ws70+a70-.png"
                addWindow(img)
            }
        }
    }
    if (ecoLevel['air'] >= 70){
        if(ecoLevel['water'] < 70){
            if(ecoLevel['soil'] < 70){
                const img = "a70+ws70-.png"
                addWindow(img)
            }
            else if(ecoLevel['soil'] >= 70){
                const img = "as70+w70-.png"
                addWindow(img)
            }
        }
        else if (ecoLevel['water'] >= 70){
            if(ecoLevel['soil'] < 70){
                const img = "aw70+s70-.png"
                addWindow(img)
            }
            else if(ecoLevel['soil'] >= 70){
                const img = "aws70+.png"
                addWindow(img)
            }
        }
    }
}

// 창문 이미지 생성
function addWindow(img) {
    const text = 'window';
    const newImage = document.createElement("IMG");
    newImage.setAttribute('src', 'img/window/' + img);
    newImage.setAttribute('id', text);
    newImage.setAttribute('alt', 'image of ' + img);
    windowSection.appendChild(newImage);   
}

// 서버에 요청 후 값 받아오기
function itemRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../main.php');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let json = JSON.parse(xhr.responseText);

            for (let jkey in json) {
                for (let ikey in itemList) {
                    if(jkey == ikey){
                        const jvalue = json[jkey]
                        itemList[ikey] = jvalue
                        break
                    } 
                }
            }
        }
        addItem(itemList);
        console.log('itemList: ', itemList)
    };
    xhr.send();
}

function infoRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getUserInfo.php');
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
        console.log('ecoLevel: ', ecoLevel);
    };
    xhr.send();
    // 정보를 다 받아오면 실행
    // onreadystatechange의 콜백에서 실행하면 랜더링 시 마다 호출됨
    setEcoState();
}

itemRequest();
infoRequest();
