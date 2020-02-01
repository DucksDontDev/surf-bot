function start() {
    if(!$(".circle-visual").hasClass("playing")) {
        $(".circle-visual").addClass("playing");
        if(!$(".instructions").hasClass("playing")) {
            $(".instructions").addClass("playing");
        }
        
        if(!$(".circle-visual").hasClass("played")) {
            $(".circle-buttons>.buttons-play").css("display","none");
            $(".circle-visual").addClass("played");
            $(".instructions1").fadeOut(750);
            setTimeout(function(){
                $(".instructions2").fadeOut(500);
            },4.5e3);
            $(".instructions3,.instructions4").addClass("playing");
        } else {
            $(".circle-buttons>.buttons-restart").css("display","none");
            $(".instructions3,.instructions4").addClass("playing");
        }
        setTimeout(function(){
            finish();
        },65e3);
    }
}
function finish() {
    $(".circle-visual").removeClass("playing");
    $(".instructions3,.instructions4").removeClass("playing");
    $(".circle-buttons>.buttons-restart").css("display","block");
}
$(".circle-buttons").on("click",function(){
    start();
});