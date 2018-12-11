document.getElementById("two").onclick = function() { popFunction() }

function popFunction(){
    var popup = document.getElementById("myPopup");
    console.log(popup);
    if(popup.style.display === "none"){
        popup.style.display = "block";
    } else{
        popup.style.display = "none"
    }
}