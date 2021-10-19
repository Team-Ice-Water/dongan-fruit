<?php 
    session_start();
    include 'connect.php';

    $userID = $_POST["userid"];
    $userPW = $_POST["password"];
    // 아이디가 member table에 있는지 확인
    $sql = "select * from member where m_id='$userID';";
    $ret = mysqli_query($con, $sql);

    if (!$ret){
        echo("쿼리오류 발생: " . mysqli_error($con));
    } else if($ret){       
        $count = mysqli_num_rows($ret);

        if($count == 0){
?>      <script>
            alert( '해당 아이디의 회원정보가 없습니다.\n 회원가입해주세요.' );
            location.href = '/';
        </script>
<?php
        } else { //아이디가 있다면
            $row = mysqli_fetch_array($ret);        //배열로 변환
            if($row['m_pw']==$userPW){              //비밀번호가 맞다면
                $_SESSION['current_id']=$userID;    //세선 변수 생성
?>      <script>
                alert( '로그인 성공' );
                location.href = '/start.html';
        </script>
<?php
            } else{
                echo "비밀번호가 일치하지 않습니다."."<br>";
            }
        }
    }
    mysqli_close($con);
?>