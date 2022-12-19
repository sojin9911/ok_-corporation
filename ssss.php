<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (!isset($g5['title'])) {
  $g5['title'] = $config['cf_title'];
  $g5_head_title = $g5['title'];
}
else {
  $g5_head_title = $g5['title']; // 상태바에 표시될 제목
  $g5_head_title .= " | ".$config['cf_title'];
}

?>


asdfsf