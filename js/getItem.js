/* 아이템, 창문 띄우는 JS */
const itemSection = document.querySelector(".item");

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

// 아이템 등을 띄울 이미지 태그를 만드는 함수
function makeImg(section, file, name, damage) {
    console.log("makeImg()");
    const newImage = document.createElement("IMG");
    newImage.setAttribute('src', 'img/' + file);
    newImage.setAttribute('id', name);
    newImage.setAttribute('alt', 'image of ' + file);
    if(damage){
        newImage.style.opacity="0.4";
    }    
    section.appendChild(newImage);
}


// 받아온 값을 기반으로 아이템 이미지 생성
function addItem(obj) {
    for (let key in obj) {
        const value = obj[key];
        const fileName = itemFile[key];
        console.log(fileName +": " +value);
        if(value == "1"){  // true이면
            makeImg(itemSection, fileName, key, false);
        } else if(value == "2"){
            console.log("손상 이미지");
            makeImg(itemSection, fileName, key, true);
        }
    }  
}

// 아이템 정보 요청, 가지고 있는 아이템은 사진 띄움
function itemRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../getItemInfo.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);

            for (let jkey in json) {
                for (let ikey in itemList) {
                    if(jkey == ikey){
                        const jvalue = json[jkey];
                        itemList[ikey] = jvalue;
                        break
                    } 
                }
            }
        }
        addItem(itemList);
    };
}

itemRequest();