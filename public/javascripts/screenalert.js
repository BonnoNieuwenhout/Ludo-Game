$(document).ready(function(){
    if($(document).width() < 1000){
            var txt = "";
            txt += "Document width/height: " + $(document).width();
            txt += "x" + $(document).height() + "\n";
            txt += "Window width/height: " + $(window).width();
            txt += "x" + $(window).height();
            alert(txt);
        };
    });


