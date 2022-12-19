// 햄버거 메뉴 눌렀을때
$(".only_mob_btn.left_btn").click(function () {
  $(".mo_nav").addClass("for_left");
  $(".for_mobhdt_box").addClass("rent_left");
  $(".real_all_wrap").addClass("move_on");
});

// 헤더오른쪽버튼 눌렀을때
$(".only_mob_btn.right_btn").click(function () {
    $(".for_mobhdt_box").addClass("for_right");
});
// 닫기 버튼 눌렀을때
$(".close_menu_right").click(function () {
   $(".for_mobhdt_box").removeClass("for_right");
});

// 뒷 배경 눌렀을때
$(".hd_top_bg").click(function () {
  if ($(".for_mobhdt_box").hasClass("for_right")) {
    $(".for_mobhdt_box").removeClass("for_right");
  } else {
    $(".for_mobhdt_box").removeClass("rent_left");
    $(".real_all_wrap").removeClass("move_on");
    $(".mo_nav").removeClass("for_left");
    $(".add_depth").removeClass("active");
    $(".ad_back").removeClass("on");
  }
});


$(".add_depth").click(function () {
  $(this).addClass("active");
  $(".ad_back").addClass("on");
});
$(".ad_back").click(function () {
    $(this).removeClass("on");
    $(".add_depth").removeClass("active");
});