setInterval(showTime, 1000);
function showTime() {
     // Heure
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    //afficher l'heure
    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();

setInterval(afficheDate, 1000);
function afficheDate(){
    //date
    let dateActuelle = new Date();
    let jour = dateActuelle.getDay();
    let year = dateActuelle.getFullYear();
    let mois = dateActuelle.getMonth() + 1;
    let journum = dateActuelle.getDate();

    //jour en texte
    const txtday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]; 
    let jourtxt = txtday[jour];

    //afficher la date
    let displayDate = document.getElementById('date');
    displayDate.innerHTML = jourtxt + " " + year + "-" + mois + "-" + journum;
}
afficheDate();