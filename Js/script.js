function check() {
    var date = document.getElementById("date").value;
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var femaleNames=[ "Akosua", "Adwoa", "Abenaa","Akua", "Yaa", "Afua", "Ama"];
    var maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

    var cap=new Date(date,month,year);
    cap.setDate(parseInt(date));
    cap.setMonth(parseInt(month)-1);
    cap.setFullYear(parseInt(year));
    var cad = cap.getDay();
