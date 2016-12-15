$(document).ready(function () {
    $(".panel").draggable({
        containment: "#wrapper"
    });
    $(".panel").resizable({
        containment: "#wrapper"
    });

    $(".panel").on("drag", function () {
        $(".panel").css("z-index", "3");
        $(this).css("z-index", "1000");
    });

    $(".panel").on("drop", function () {
        $(".panel").css("z-index", "3");
        $(this).css("z-index", "1000");
    });

    function changeShadowHeight(height, callback) {
        $(this).css("height", height);
        callback();
    }
    function changePanelHeight() {
        $(this).css({"border": "3px solid rgba(192,192,192, 0.5)", "border-top": "none", "border-left": "none"});
    }
    $(".panel").on("resize", function () {
        var height = $(this).css("height");
        $(this).children(".panel-body").each(function () {
            changeShadowHeight(height, function () {
                changePanelHeight();
            });
        });
    });
    
   
});                