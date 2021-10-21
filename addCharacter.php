<?php
    // 캐릭터 설정 페이지
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $newName = $_POST["cname"];
    $type = $_POST["type"];

    // 캐릭터 이름이 character에 있는지 확인
    $check_sql = "select * from character_info where m_id='$userId' AND cname='$newName'";
    $check_ret = mysqli_query($con, $check_sql);

    if($check_ret){
        $count = mysqli_num_rows($check_ret);
        echo $check_sql;
        echo $count;

        if($count == 0){ //원래 없던 이름이면 없었으면 추가
            
            $sql = "
                insert into character_info(m_id, cname, ctype) 
                values('$userId', '$newName', '$type');
            ";
            $ret = mysqli_query($con, $sql);

            $sql2 = "
                insert into character_state(m_id, cname) 
                values('$userId', '$newName');
            ";
            $ret2 = mysqli_query($con, $sql2);

            $sql3 = "
                insert into ending_info(m_id, cname)
                values('$userId', '$newName');
            ";
            $ret3 = mysqli_query($con, $sql3);

            $_SESSION['current_toon']= $newName;

            echo "<script>alert('캐릭터 이름: {$newName} (으)로 캐릭터가 생성되었습니다. 게임을 시작합니다.');</script>";

?>              <script>
                    location.replace('miniGame.html');
                </script>
<?php

        } else{ // 이름이 이미 있다면
?>          <script>
                alert( '이미 있는 캐릭터 이름입니다. 다른 이름으로 만들어주세요.' );
                // 새로고침 안되겠지 ? <- 결정 버튼 누를 때마다 지금 php 호출되니까 ok
            </script>
<?php
        }      
        
    } else{ // 이름이 이미 있다면
        ?>          <script>
                        alert( '이미 있는 캐릭터 이름입니다!! 다른 이름으로 만들어주세요.' );
                        // 새로고침 안되겠지 ? <- 결정 버튼 누를 때마다 지금 php 호출되니까 ok
                    </script>
        <?php
                }
    
    mysqli_close($con);
?>