var openWin;

// 자식창 open
function openwindow(url){
    // window.name = "부모창 이름"; 
    window.name = "parentForm";
    // window.open("open할 window", "자식창 이름", "팝업창 옵션");
    openWin = window.open(url,'childForm','scrollbars=no,width=500,height=700');
    elementId=id;
}

// 부모창->자식창 값 전달
function setChildText(){
    openWin.document.getElementById("cInput").value = document.getElementById("pInput").value;
}

// 자식창 close
function closewindow(elementId){
    var arr= new Array();
    arr=document.getElementsByTagName("input");
    var value='';
    for(var i=0; i<arr.length; i++){
        if(arr[i].checked){
        value=arr[i].value;
        break;
        }
    }
    window.close();
    window.opener.document.getElementById(elementId).value=value;

}