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

            $ret = mysqli_query($con, $sql);
            //echo $sql;
            echo "<script>alert('ID: {$newID} 로 회원가입이 완료되었습니다. 로그인 후 이용해주세요.');</script>";
?>              <script>
                    location.href = 'login.html';
                </script>
<?php
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
?>
