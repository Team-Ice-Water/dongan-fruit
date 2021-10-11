<?php 
    session_start();
    include 'connect.php';

    if (isset($_POST["userid"])){
        $userID = $_POST["userid"];
        $userPW = $_POST["password"];
        // 아이디가 member table에 있는지 확인
        $sql = "select * from member where m_id='$userID'";
        $ret = mysqli_query($con, $sql);

        if($ret){
            $count = mysqli_num_rows($ret);
            if($count == 0){
?>
                <script>
                    alert( '해당 아이디의 회원정보가 없습니다.\n 회원가입해주세요.' );
                    location.href = '/';
                </script>
<?php
            }
            else{ //아이디가 있다면
                $row = mysqli_fetch_array($ret);        //배열로 변환
                if($row['m_pw']==$userPW){              //비밀번호가 맞다면
                    $_SESSION['current_id']=$userID;    //세선 변수 생성
?>                  <script>
                        alert( '로그인 성공' );
                        location.href = '/mypage.php';
                    </script>
<?php
                }
                else{
                    echo "비밀번호가 일치하지 않습니다."."<br>";
                }
            }
        }
        else{
            echo "데이터 조회 실패"."<br>";
            echo "실패 원인: ".mysqli_error($con);
        }
    }
    
    mysqli_close($con);
?>