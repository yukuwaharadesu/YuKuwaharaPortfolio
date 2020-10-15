//↓ホーム画面「Welcome to My Portfoilo」文字を１文字ずつ表示する
$(window).on("load", function () {
  var text_wrap = "#title";
  var delay_speed = 120; //文字が出るスピード(ミリ秒)
  var fade_speed = 1400; //文字がフェードするスピード(ミリ秒)
  var str;
  $(text_wrap).css("opacity", "1");
  var firsttxt = $(text_wrap).html();
  str = firsttxt.replace(/<br>/g, "\n");
  $(text_wrap).html("");
  for (var i = 0; i < str.length; i++) {
    $(text_wrap).append(
      '<span class="text_span">' +
        str.substr(i, 1).replace(/\n/, "<br>") +
        "</span>"
    );
    $(text_wrap)
      .children("span:last-child")
      .delay(delay_speed * i)
      .animate({ opacity: "1" }, fade_speed);
  }
  setTimeout(function () {
    $(text_wrap).html(firsttxt);
  }, str.length * delay_speed + fade_speed);
});

//↓メニューバーのスクロール後の固定
$(function () {
  var navPos = $("#global-nav").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > navPos) {
      $("#global-nav").css("position", "fixed");
    } else {
      $("#global-nav").css("position", "static");
    }
  });
});

//↓スムーススクロール
$(function () {
  $("a").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 70;
    $("html,body").animate({ scrollTop: target }, 500);
    return false;
  });
});

//↓自己紹介画像のフェードイン
$(function () {
  $(window).scroll(function () {
    $(".fadein").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 20) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      } else {
        $(this).css("opacity", "0");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//↓自己紹介画像の横スライド
//$(function () {
//var count = $("#me li").length;
//画像の枚数
//var current = 1;
//現在表示されている画像(最初は１番目の画像)
//var next = 2;
//次に表示される画像
//var interval = 5000;
//フェードインとアウトのインターバル
//var duration = 1000;
//フェードインとアウトのスピード
//var timer;
//タイマーの変数
//$("#me li:not(:first-child)").hide();
//１番目の写真以外は非表示
//timer = setInterval(slideTimer, interval);
//3000ミリ秒（変数intervalの値）ごとにslideTimer()関数を実行
//function slideTimer() {
//$("#me li:nth-child(+" + current + ")").fadeOut(duration);
//現在の画像をフェードアウト
//$("#me li:nth-child(+" + next + ")").fadeIn(duration);
//次の画像をフェードイン
//current = next;
//変数currentの新しい値:変数nextの元の値
//next = ++next;
//変数nextの新しい値:変数currentの新しい値+1
//if (next > count) {
//next = 1;
//}
//$("#button li a").removeClass("target");
//targetクラスを削除
//$("#button li:nth-child(" + current + ")a").addClass("target");
//}
//$("#button li a").click(function () {
//next = $(this).html();
//テキスト内容を変数nextに代入
//clearInterval(timer);
//timer = setInterval(slideTimer, interval);
//タイマーを停止して再スタート
//slideTimer();
//初回の関数実行
//return false;
//});
//});

//↓自己紹介文のフェードイン
$(function () {
  $(window).scroll(function () {
    $(".fadein-pro").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 20) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      } else {
        $(this).css("opacity", "0");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".title-A").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 20) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      } else {
        $(this).css("opacity", "0");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".title-B").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 20) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      } else {
        $(this).css("opacity", "0");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//↓job画像を左横からフェードイン
var window_h = $(window).height();
$(window).on("scroll", function () {
  var scroll_top = $(window).scrollTop();
  $(".job-img").each(function () {
    var elem_pos = $(this).offset().top;
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 300) {
      $(this).addClass("fadein-job"); //特定の位置を超えたらクラスを追加
    } else {
      $(this).removeClass("fadein-job"); //そうでない場合はクラスを削除
    }
  });
});

//↓jobなりたいエンジニア文
$(function () {
  $(window).scroll(function () {
    $(".job-1,.job-2,.job-comment-1,.job-comment-2").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 20) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      } else {
        $(this).css("opacity", "0");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//↓work画像文フェードイン
var window_h = $(window).height();
$(window).on("scroll", function () {
  var scroll_top = $(window).scrollTop();
  $(".item-A").each(function () {
    var elem_pos = $(this).offset().top;
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 100) {
      $(this).addClass("fadein-job"); //特定の位置を超えたらクラスを追加
    } else {
      $(this).removeClass("fadein-job"); //そうでない場合はクラスを削除
    }
  });
});

//↓work説明文フェードイン
$(function () {
  $(window).scroll(function () {
    $(".item-B").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      } else {
        $(this).css("opacity", "0");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//↓Topに戻るボタン
$(function () {
  // ボタンの要素を指定。ここでは「#for_top」を指定
  var $btn = $("#for_top");
  var isHidden = true;
  //  デフォルトは非表示
  $btn.hide();
  $(window).scroll(function () {
    // 240pxスクロールした時点でフェードイン表示する
    if ($(this).scrollTop() > 240) {
      if (isHidden) {
        $btn.stop(true, true).fadeIn(200);
        isHidden = false;
      }
    } else {
      //最上段から240pxの位置に戻るとフェードアウトで消える
      if (!isHidden) {
        $btn.stop(true, true).fadeOut();
        isHidden = true;
      }
    }
  });
  // クリックイベントの登録
  $btn.click(function () {
    //  ページトップへスクロール
    $("html, body").animate(
      {
        scrollTop: 0,
        // 1/1000秒でスピード調整
      },
      300
    );
    // デフォルトイベントのキャンセル
    return false;
  });
});
