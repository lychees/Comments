var txt1="<p>Text.</p>";               // 以 HTML 创建新元素
var txt2=$("<p></p>").text("Text.");   // 以 jQuery 创建新元素
var txt3=document.createElement("p");  // 以 DOM 创建新元素
txt3.innerHTML="Text.";
$("body").append(txt1,txt2,txt3);         // 追加新元素

var backup = "<div class='comments'>\
<div class='thumb'>\
<span class='thumb_ico'></span>\
<span class='thumb_num'>0</span>\
</div>\
<div class='vote_up'>+1</div>\
<div class='vote_down'>+1</div>\
你好啊</div>"

$("body").append(backup);

$(".thumb_ico").click(function(){
	alert("+1s");
});

