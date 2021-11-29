document.getElementById("school-info").addEventListener("click", showInfo, true);
document.getElementById("support-info").addEventListener("click", showInfo, true);
document.getElementById("accom-info").addEventListener("click", showInfo, true);
document.getElementById("lawyer-info").addEventListener("click", showInfo, true);
document.getElementById("med-info").addEventListener("click", showInfo, true);
document.getElementById("advoc-info").addEventListener("click", showInfo, true);

function showInfo(ev){
    document.getElementById("info-overlay").style.display = "block";
    ev.preventDefault();
    ev.stopPropagation();
}

function hideInfo(){
    document.getElementById("info-overlay").style.display = "none";
}
