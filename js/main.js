/* 이미지 */
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

const fileList = {
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

// 서버에 요청 후 값 받아오기
function sendRequest() {
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
        console.log('itemList: ', itemList)
        addImg(itemList);
    };
    xhr.send();
}

// 받아온 값을 기반으로 이미지 생성
function addImg(obj) {
    for (let key in obj) {
        const value = obj[key]
        if(value == "1"){  // true이면
            const file = fileList[key]
            const newImage = document.createElement("IMG");
            newImage.setAttribute('src', 'img/' + file);
            newImage.setAttribute('id', file);
            newImage.setAttribute('alt', 'image of ' + file);
            itemSection.appendChild(newImage);
        }
    }  
}


sendRequest();
