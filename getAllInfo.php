<?php
    // 캐릭터 선택 페이지에서 사용
    // cname (캐릭터 이름) 세션 변수 생성

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    // 해당 id의 정보 선택
    $sql = "select * from character_info where m_id='$userId' AND is_end = 0;";
    $result = mysqli_query($con, $sql);

    class Character {
        public $name;
        public $ctype;
        public $health;
        public $day;
        public $water;
        public $air;
        public $soil;

        public function __construct($name, $ctype, $health, $day, $water, $air, $soil) {  // 생성자도 무조건 정의해줘야 함
            $this->name = $name;
            $this->ctype = $ctype;
            $this->health = $health;
            $this->day = $day;
            $this->water = $water;
            $this->air = $air;
            $this->soil = $soil;
        }            
    }

    $num = 0;
    $array = array();
    if($result){
        while ($row = mysqli_fetch_array($result)) {    // assoc 는 안됨.. 
            $array[$num] = new Character($row['cname'], $row['ctype'], $row['health'], $row['day'], $row['water'], $row['air'], $row['soil']);
            $num++;
        }
    }
    echo json_encode($array); 

    mysqli_close($con);

?>