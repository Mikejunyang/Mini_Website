function Addition(){
   // alert("Here");
    var1 = 10;
    var2 = 20;
    var3 = "30";
    var4 = "40";

    ans1 = var1 + var2 + var2 + var1;
    ans2 = var4 + var2 + var1;
    ans3 = var4 + var2 + var2 + var3;
    ans4 = var1 + var1 + var2;
    ans5 = var1 + var2 + var3 + var4;

    document.getElementById('demo').innerHTML = "<p>" + var1 + " + " + var2 + " + " + var2 + " + " + var1 + " = " + ans1 + "</p>";
    document.getElementById('demo2').innerHTML = "<p>" + var4 + " + " + var2 + " + " + var1 + " = " + ans2 + "</p>";
    document.getElementById('demo3').innerHTML = "<p>" + var4 + " + " + var2 + " + " + var2 + " + " + var3 + " = " + ans3 + "</p>";
    document.getElementById('demo4').innerHTML = "<p>" + var1 + " + " + var1 + " + " + var2 + " = " + ans4 + "</p>";
    document.getElementById('demo5').innerHTML = "<p>" + var1 + " + " + var2 + " + " + var3 + " + " + var4 + " = " + ans5 + "</p>";
}