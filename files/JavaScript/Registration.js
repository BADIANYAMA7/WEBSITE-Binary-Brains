document.addEventListener("DOMContentLoaded", function () {
    let Name;
    let Passport;
    let home;
    let area;

    document.getElementById("Submit1").onclick = printAlert;

    function printAlert() { //print Alert and clears the input fields
        Name = document.getElementById("text1").value;
        Passport = document.getElementById("text2").value;
        home = document.getElementById("text3").value;
        area = document.getElementById("text4").value;

        if (document.getElementById("text1").value == "") {
            alert("Please enter your Name");
        } else if (document.getElementById("text2").value == "") {
            alert("Please enter your Passport Number");
        } else if (document.getElementById("text3").value == "") {
            alert("Please enter your Home Address");
        } else if (document.getElementById("text4").value == "") {
            alert("Please enter your Area Code");
        } else {
            alert("Successful Registration");
        }


        document.getElementById("text1").value = "";
        document.getElementById("text2").value = "";
        document.getElementById("text3").value = "";
        document.getElementById("text4").value = "";
    }
});