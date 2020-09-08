function myMenu(){
    if(document.getElementById("main_nav").style.display == "none" || document.getElementById("main_nav").style.display == "" ){
        document.getElementById("main_nav").style.display = "block";
    } else {
        document.getElementById("main_nav").style.display = "none";
    }
}