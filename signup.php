<?php
    
    include 'connect.php';
    session_start();
    
    $newID = $_POST["userid"];
    $newPW = $_POST["password"];
    $newName = $_POST["username"];

    // 아이디가 member 있는지 확인
    $check_sql = "select * from member where m_id='$newID'";
    $check_ret = mysqli_query($con, $check_sql);

    if($check_ret){
        $count = mysqli_num_rows($check_ret);
        if($count == 0){ //아이디가 없었으면 추가
            $sql = "
                insert into member(m_id, m_pw, mname) 
                values('$newID', '$newPW', '$newName');
            ";
            
            $sql .= "
                insert into character_info(m_id, cname) 
                values('$newID', '$newName');
            ";

            $sql .= "
                insert into ending_info(m_id) 
                values('$newID');
            ";

            if( mysqli_multi_query($con, $sql) ){
                do {
                  // store first result set
                  if ($result = mysqli_store_result($con)) {
                    // fetch one and one row
                    while ($row = mysqli_fetch_row($result)) {
                       console.log('$row[0]: ', $row[0]);
                    }              
                    // free result set
                    mysqli_free_result($result);
                  }
                } while (mysqli_more_results($con) && mysqli_next_result($con));
            }

            echo "ID: ".$newID."로 회원가입이 완료되었습니다. 로그인 후 이용해주세요."."<br>";
            echo "<br> <a href='login.html'> 로그인 하기 </a>";
            echo "<br> <a href='/'> 메인화면으로 돌아가기 </a>";
            exit();
        }
        else{ // 아이디가 이미 있다면
?>              <script>
                    alert( '이미 회원으로 가입된 아이디 입니다. 다른 아이디로 가입해주세요.' );
                    location.href = 'signup.html';
                </script>
<?php
            
        }
    }
    else{
        echo "데이터 조회 실패"."<br>";
        echo "실패 원인: ".mysqli_error($con);
        echo "<br> <a href='/'> 메인화면으로 돌아가기 </a>";
        exit();
    }
    ?>              <script>
    alert( '"<?php $newID?>로 회원가입이 완료되었습니다. 로그인 후 이용해주세요.'");
    location.href = 'login.html';
</script>
<?php  
?>


