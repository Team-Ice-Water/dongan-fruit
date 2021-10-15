const valueText = [
    { id: "bible", text: "야호~! 오늘은 기다리고 기다리던 여름성경학교 날이다!", water: -2, air: -2, soil: -2, health: -1},
    { id: "tumbler", text: "텀블러만 사용해도 일회용 컵들을 많이 줄일 수 있어!", soil: -3, health: -1 },
    { id: "foodwaste", text: "오늘은 음식물 쓰레기를 버리는 날, 음식물 쓰레기를 정리해서 버려볼까?", soil: -2, health: -1 },
    { id: "bicycle", text: "오늘은 자전거 타기 딱~좋은 날씨구만!", air: -4, health: -2 },
    { id: "aircon", text: "나는야 에어컨 온도 지킴이! 여름철 실내 적정 온도는 26도야. 26도만 되어도 충분히 시원하지", air: -2, health: -1 },
    { id: "soap", text: "환경을 생각하는 청지기라면 천연비누 정도는 사용해야지~", water: -3, health: -1 },
    { id: "savewater", text: "물을 절약하는 것도 환경보호에 굉장한 효과가 있어!", water: -2, health: -1 },
    { id: "worm", text: "지렁이는 흙속 유기물을 먹고 배출하면서 토양을 비옥하게 만들어요./그래서 식물이 더 잘 자라는 토양을 만들어주니까 지렁이를 준비해서 방생해볼까요?", soil: -15, health: -10 },
    { id: "recycle", text: "분리수거만 잘해도 토양오염을 줄일 수 있어요!", soil: -10, health: -10 },
    { id: "tree", text: "우리에게 깨끗한 공기를 주는 나무를 심어요.", air: -15, health: -10 },
    { id: "air", text: "우리 동네 대기오염도를 조사해봅시다! 대기오염도를 알아야 경각심을 갖고 대책을 마련할 수 있어요!", air: -10, health: -10 },
    { id: "sea", text: "바닷가 주변에 플라스틱, 비닐 쓰레기를 주워주세요./이런 쓰레기들이 바다로 가면 바다에 살고 있는 생물들이 위험해진답니다.", water: -15, health: -10 },
    { id: "river", text: "쓰레기가 하천으로 가면 물이 오염돼요. 하천 주변에 있는 쓰레기를 줍는 봉사활동을 합니다.", water: -10, health: -10 },
    { id: "campaign", text: "오늘은 환경캠페인이 열리는 날! 청지기라면 환경캠페인엔 무조건 참여해야겠죠?!", water: -5, air: -5, soil: -5, health: -10 },
    { id: "camp", text: "오랜만에 자연 속에서 쉼을 누리며 캠핑을 즐겨볼까? 바비큐도 먹고 불멍도 해야지~", soil: 10, health: 20 },
    { id: "plane", text: "빨리 여행지로 가고 싶은데.. 역시 빠르고 편한 비행기를 타고 가야겠어.", air: 10, health: 20 },
    { id: "beach", text: "여름엔 역시 시원한 해수욕장이 최고야! 튜브타고 신나게 놀아야지~", water: 10, health: 20 },
    { id: "rest", text: "환경을 지키는 청지기에게도 쉼은 필요해./푹 쉬고 에너지를 충전해서 다시 청지기로서 하나님이 주신 아름다운 세상을 지키러 가야지~!", water: 2, air: 2, soil: 2, health: 5}
]

const dawnTxt = document.getElementById("dawnTxt");
const amTxt = document.getElementById("amTxt");
const pmTxt = document.getElementById("pmTxt");

var totalWater = 0;
var totalSoil = 0;
var totalAir = 0;
var totalHealth = 0;

function setText(findThis, tag) {
    for(let value of valueText){
        if(value['id'] == findThis){
            tag.innerText = value['text'];

            /* 수치 변동 사항 멘트를 지정한다. */
            var text = "";
            
            if(value['health'] < 0){
                text = "체력 "+ Math.abs(value['health']) + " 감소";
            } else{
                text = "체력" + value['health'] + " 증가";
            }

            if('water' in value){
                if(value['water'] < 0){
                    text += ", 수질 오염도 "+ Math.abs(value['water']) + " 감소";
                } else{
                    text += ", 수질 오염도 " + value['water'] + " 증가";
                }
            }

            if('air' in value){
                if(value['air'] < 0){
                    text += ", 대기 오염도 "+ Math.abs(value['air']) + " 감소";
                } else{
                    text += ", 대기 오염도 " + value['air'] + " 증가";
                }
            }

            if('soil' in value){
                if(value['soil'] < 0){
                    text += ", 토양 오염도 "+ Math.abs(value['soil']) + " 감소";
                } else{
                    text += ", 토양 오염도 " + value['soil'] + " 증가";
                }
            }
            
            /* 다음 줄에 변동사항을 적는다. */
            switch (tag) {
                case dawnTxt:
                    $("#dawnInfo").text(text);
                    break;
                case amTxt:
                    $("#amInfo").text(text);
                    break;
                case pmTxt:
                    $("#pmInfo").text(text);
                    break;
            
                default:
                    break;
            }
                                
            break;
        }
    }
}

function addTotal(findThis) {
    console.log("addTotal 실행");
    for(let value of valueText){
        if(value['id'] == findThis){
            
            totalHealth += value['health'];

            if('water' in value){
                totalWater += value['water'];
            }

            if('air' in value){
                totalAir += value['air'];
            }

            if('soil' in value){
                totalSoil += value['soil'];
            }
                      
            break;
        }
    }
}

function startTyping(){     // 출처: https://gahyun-web-diary.tistory.com/2
    var typingBool = false; 
    var typingIdx = 0; 
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    console.log('typingTxt: ', typingTxt);
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        var tyInt = setInterval(typing,100); // 반복동작 
    } 
        
    function typing(){ 
        console.log("liIndex: " ,liIndex);
        if(typingTxt.length > 2){   // 텍스트가 없으면 커서 깜빡임 없이 넘어가기 위해!
            $(".typing ul li").removeClass("on");
            $(".typing ul li").eq(liIndex).addClass("on");
        }

        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
            //console.log($(".typing ul li").text());
            if(typingTxt[typingIdx] === '/'){
                $(".typing ul li").eq(liIndex).append('</br>');
            } else {
                $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            }                    
            typingIdx++;

        } else{ 
            if(liIndex<liLength-1){
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++; 
                //다음문장을 타이핑하기위한 셋팅
                typingIdx=0;
                typingBool = false; 
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
                console.log(">> typingTxt: ", typingTxt); 
            
                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료
            
                setTimeout(function(){
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing,100);
                },1000);
            } else if(liIndex==liLength-1){
                //마지막 문장까지 써지면 반복 종료
                clearInterval(tyInt);
                // 커서 깜빡이는거 종료
                $(".typing ul li").removeClass("on");
                // 총 변화를 보여주는 텍스트 띄우기
                showTotal();
                $('.nextBtn').html('<button type="button" class="btn btn-light" onclick="checkEnding();"> 내일로 넘어가기 </button>');
            }
        } 
    }
}

function checkEnding() { 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../checkEnd.php');
    xhr.send();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log("응답:", xhr.responseText);

            switch (xhr.responseText) {
                case 'health_ending':
                    window.open('ending.html?health', '_self', '');
                    //location.href = 'ending.html?health';
                    break;
                case 'water_ending':
                    window.open('ending.html?water', '_self', '');
                    //location.href = 'ending.html?water';
                    break;
                case 'soil_ending':
                    window.open('ending.html?soil', '_self', '');
                    //location.href = 'ending.html?soil';
                    break;
                case 'air_ending':
                    window.open('ending.html?air', '_self', '');
                    //location.href = 'ending.html?air';
                    break;
                case 'earth_ending':
                    window.open('ending.html?earth', '_self', '');
                    //location.href = 'ending.html?earth';
                    break;
                case 'normal_ending':
                    window.open('ending.html?normal', '_self', '');
                    //location.href = 'ending.html?normal';
                    break;
                default:
                    console.log("엔딩에 안걸림");
                    location.replace('startDay.html');
                    break;
            }
        }
    };
}

/* 총 변동사항을 적는 함수*/
function showTotal() {

    var text = "총 \n";

    if(totalHealth < 0){
        text += "체력 "+ Math.abs(totalHealth) + " 감소";
    } else if(totalHealth == 0){
        text += "체력 변화 없음";
    } else{
        text += "체력 " + totalHealth + " 증가";
    }
    
    if(totalSoil != 0){
        if(totalSoil < 0){
            text += ", 토양 오염도 "+ Math.abs(totalSoil) + " 감소";
        } else if(totalSoil == 0){
            text += ", 토양 오염도 변화 없음";
        } else{
            text += ", 토양 오염도 " + totalSoil + " 증가";
        }
    }

    if(totalWater != 0){
        if(totalWater < 0){
            text += ", 수질 오염도 "+ Math.abs(totalWater) + " 감소";
        } else if(totalWater == 0){
            text += ", 수질 오염도 변화 없음";
        } else{
            text += ", 수질 오염도 " + totalWater + " 증가";
        }
    }

    if(totalAir != 0){
        if(totalAir < 0){
            text += ", 대기 오염도 "+ Math.abs(totalAir) + " 감소";
        } else if(totalAir == 0){
            text += ", 대기 오염도 변화 없음";
        } else{
            text += ", 대기 오염도 " + totalAir + " 증가";
        }
    }

    $(".total").text(text);
    
}

/* 받은 정보를 구분하여 변수에 저장한다 */
const temp = location.href.split("?"); 
const data= temp[1].split(":"); 
console.log(data);

const today = data[0]; 
$('.title').text(today+' 일차의 모든 스케쥴을 끝냈다. 오늘 하루도 수고했다!');
const data1 = data[1];
addTotal(data1);     
const data2 = data[2];
addTotal(data2);
var data3 = "";

/* 정보(id)에 따라 화면에 띄워야 할 텍스트(멘트, 변동사항)를 지정한다. */
if(data.length == 4){
    data3 = data[3];
    addTotal(data3);
}

// 같은 스케쥴이 두번이면 텍스트는 한번만 띄운다.
if((data1 == data2)){
    // 새벽 = 아침
    if(data3 !== ""){
        // 새벽 = 아침 != 저녁
        setText(data3, pmTxt);
    }
} else if((data1 == data3) || ((data2 == data3))){
    // 새벽 = 저녁 or 아침 = 저녁 
    setText(data2, amTxt);
} else{ // 새벽 != 아침 != 저녁
    if(data3 !== ""){
        setText(data3, pmTxt);
    }
    setText(data2, amTxt);
}
// 기본적으로 새벽은 띄운다. (겹칠 때도 가장 우선)
setText(data1, dawnTxt);   


/* 화면 전환 효과가 끝나고 텍스트의 타이핑 효과가 시작된다. */
setTimeout(() => {
    startTyping();
}, 3000);