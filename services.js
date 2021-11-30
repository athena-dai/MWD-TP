document.getElementById("school-info").addEventListener("click", showInfo, true);
document.getElementById("support-info").addEventListener("click", showInfo, true);
document.getElementById("accom-info").addEventListener("click", showInfo, true);
document.getElementById("lawyer-info").addEventListener("click", showInfo, true);
document.getElementById("med-info").addEventListener("click", showInfo, true);
document.getElementById("advoc-info").addEventListener("click", showInfo, true);



function showInfo(ev){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("info-overlay").style.display = "block";


    // display different header and supporting text 
    // depending on which card's info icon clicked
    if (ev.currentTarget.id == "school-info"){
        document.getElementById("info-header").innerHTML = "School or Educational Support";
        document.getElementById("info-text").innerHTML = "Schools that have services that support students with learning disabilities, schools for people with learning disabilities, tutoring centers that help people with learning disabilities";
    }
    else if (ev.currentTarget.id == "support-info"){
        document.getElementById("info-header").innerHTML = "Finding a Support Group";
        document.getElementById("info-text").innerHTML = "Communities related to learning disabilities that can guide you and provide different resources and advice to deal with learning disabilities";
    }
    else if (ev.currentTarget.id == "accom-info"){
        document.getElementById("info-header").innerHTML = "Learning how to receive accomodations";
        document.getElementById("info-text").innerHTML = "Communities that teaching how to recieve support and benefits for different areas of life";
    }
    else if (ev.currentTarget.id == "lawyer-info"){
        document.getElementById("info-header").innerHTML = "Finding a Lawyer for Discrimination Claim";
        document.getElementById("info-text").innerHTML = "Receive legal consultation or legal representation regarding your learning disabilities";
    }
    else if (ev.currentTarget.id == "med-info"){
        document.getElementById("info-header").innerHTML = "Finding a Therapist or Medical Support";
        document.getElementById("info-text").innerHTML = "Seek professional help from psychiatrist, therapist, psychologist or any other medical personnel. This also includes medical or research facilities catered to learning disabilities";
    }
    else if (ev.currentTarget.id == "advoc-info"){
        document.getElementById("info-header").innerHTML = "Learning How to Advocate for Yourself";
        document.getElementById("info-text").innerHTML = "Find groups that will seek to spread awareness adn representation for communities with learning disabilities";
    }
    
    ev.preventDefault();
    ev.stopPropagation();
}

function hideInfo(){
    document.getElementById("info-overlay").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
