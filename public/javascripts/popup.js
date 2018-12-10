document.getElementById("myPopup").onclick = function() { popFunction() }

function popFunction(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}