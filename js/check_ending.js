// getUserInfo.js를 통해 정보 받아옴
/*
var endingInfo = {
    culDay: 0,
    culStage: 0,
    culEnd: 0,
    envDay: 0,
    envStage: 0,
    envEnd: 0,
    homeDay: 0,
    homeStage: 0,
    homeEnd: 0
}

var userInfo = {
    day: 0,
    health: 0
}

var ecoLevelInfo = {
    air: 0,
    soil: 0,
    water: 0
}
*/

function cultureEnd() {
    for(let key in endingInfo){
        console.log(key+": "+endingInfo[key]);
    }
}

for(let key in endingInfo){
    console.log(key+": "+endingInfo[key]);
}

for(let key in userInfo){
    console.log(">> "+key+": "+userInfo[key]);
}
