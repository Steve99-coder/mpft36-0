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
    if (cad === 0){
        ("Sunday");
      } else if(cad === 1){
        ("Monday");
      } else if(cad === 2){
        ("Tuesday");
      } else if(cad === 3){
        ("Wednesday");
      } else if(cad === 4){
        ("Thursday");
      } else if(cad === 5){
        ("Friday");
      } else if (cad === 6){
        ("Saturday");
      }
      if (date < 1 || date>31 ){
        alert("Please enter a valid date");
      } else if (month == "" || month < 1  || month > 12 ){
        alert("Please enter a valid month");
      } else if (year < 1  || year>3021) {
        alert("Please enter a valid year");
      } else if(document.getElementById("male").checked == true && document.getElementById("female").checked == false){
        alert("Your Akan name is " + maleNames[cad]);
      } else if (document.getElementById("male").checked == false && document.getElementById("female").checked == true){
        alert("Your Akan name is " + femaleNames[cad]);
      }
}
