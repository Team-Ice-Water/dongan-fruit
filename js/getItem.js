/* 아이템, 창문 띄우는 JS */
const itemSection = document.querySelector(".item");
const windowSection = document.querySelector(".window");

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

// 창문, 아이템 등을 띄울 이미지 태그를 만드는 함수
function makeImg(section, file, type) {
    const newImage = document.createElement("IMG");
    newImage.setAttribute('src', 'img/' + file);
    newImage.setAttribute('id', type);
    newImage.setAttribute('alt', 'image of ' + file);
    section.appendChild(newImage);
}


// 받아온 값을 기반으로 아이템 이미지 생성
function addItem(obj) {
    for (let key in obj) {
        const value = obj[key]
        if(value == "1"){  // true이면
            const file = itemFile[key]
            makeImg(itemSection, file, key)
        }
    }  
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

// 아이템 정보 요청, 가지고 있는 아이템은 사진 띄움
function itemRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getItem.php');
    xhr.send();
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
    };
}

itemRequest();