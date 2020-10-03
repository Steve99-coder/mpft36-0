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
