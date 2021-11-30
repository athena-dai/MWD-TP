document.getElementById("school-info").addEventListener("click", showInfo, true);
document.getElementById("support-info").addEventListener("click", showInfo, true);
document.getElementById("accom-info").addEventListener("click", showInfo, true);
document.getElementById("lawyer-info").addEventListener("click", showInfo, true);
document.getElementById("med-info").addEventListener("click", showInfo, true);
document.getElementById("advoc-info").addEventListener("click", showInfo, true);



function showInfo(ev){
    document.getElementById("info-overlay").style.display = "block";

    // display different header and supporting text 
    // depending on which card's info icon clicked
    if (ev.currentTarget.id == "school-info"){
        document.getElementById("info-header").innerHTML = "School or Educational Support";
        document.getElementById("info-text").innerHTML = "School or Educational Support info";
    }
    else if (ev.currentTarget.id == "support-info"){
        document.getElementById("info-header").innerHTML = "Finding a Support Group";
        document.getElementById("info-text").innerHTML = "support info";
    }
    else if (ev.currentTarget.id == "accom-info"){
        document.getElementById("info-header").innerHTML = "Learning how to receive accomodations";
        document.getElementById("info-text").innerHTML = "accomodation info";
    }
    else if (ev.currentTarget.id == "lawyer-info"){
        document.getElementById("info-header").innerHTML = "Finding a Lawyer for Discrimination Claim";
        document.getElementById("info-text").innerHTML = "lawyer info";
    }
    else if (ev.currentTarget.id == "med-info"){
        document.getElementById("info-header").innerHTML = "Finding a Therapist or Medical Support";
        document.getElementById("info-text").innerHTML = "therapy info";
    }
    else if (ev.currentTarget.id == "advoc-info"){
        document.getElementById("info-header").innerHTML = "Learning How to Advocate for Yourself";
        document.getElementById("info-text").innerHTML = "advocacy info";
    }
    
    ev.preventDefault();
    ev.stopPropagation();
}

function hideInfo(){
    document.getElementById("info-overlay").style.display = "none";
}
