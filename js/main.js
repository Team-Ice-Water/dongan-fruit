/* 이미지 */

const itemSection = document.querySelector(".item");
const itemList = {
    tumbler: "0",
    flowerpot: "0",
    mic: "0"
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
    };
    xhr.send();
}

// 받아온 값을 기반으로 이미지 생성
function addImg(obj) {
    for (let key in obj) {
        const value = obj[key]
        if(value){  // true이면
            const newImage = document.createElement("IMG");
            newImage.setAttribute('src', '../img/' + key);
            newImage.setAttribute('alt', 'image of ' + key);
            itemSection.appendChild(newImage);
        }
    }  
}


sendRequest();
addImg(itemList);


/*
function addImg() {
    const newImage = document.createElement("IMG");
    // img src 경로 지정
    newImage.setAttribute('src', 'img/' + item);
    // 이미지에 alt 태그 추가
    newImage.setAttribute('alt', 'image of' + item);
    // itemSection에 새로운 <img> 추가
    itemSection.appendChild(newImage);
}
 */
