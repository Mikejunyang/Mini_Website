function setCookie(cname, cvalue, exmins) {
    var d = new Date();
    d.setTime(d.getTime() + (exmins * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function setCookieT(cname, cvalue, exmins) {
    var d = new Date();
    d.setTime(d.getTime() + (exmins * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function validation() {
    var Fname = document.getElementById("FName").value;

    var nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(Fname)) {
        $('#error1').text('Error: First Name Only accepts letters and spaces').css('color', 'red');       
    }
    else {
        var Lname = document.getElementById("LName").value;

        if (!nameRegex.test(Lname)) {
            $('#error2').text('Error: Last Name Only accept letters and spaces').css('color', 'red');
        }
        else {
            var Age = document.getElementById("age").value;
            var ageRegex = /^(100|[1-9]\d?|0)$/;
            if (!ageRegex.test(Age)) {
                $('#error3').text('Error: Age Only accept 0-100').css('color', 'red');
            }
            else {
                var PCode = document.getElementById("PCode").value;
                var pcodeRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
                if (!pcodeRegex.test(PCode)) {
                    $('#error6').text('Error: Postal Code accept North American Postcode: A2A 2A2').css('color', 'red');
                }
                else {
                    var Tel = document.getElementById("tel").value;
                    var telRegex = /^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

                    if (!telRegex.test(Tel)) {
                        alert('Telephone Only accept North American Telephone: (+1)123 321 1234')
                        document.getElementById("tel").style.color = 'red';

                        $('#error7').text('Error: Telephone Only accept North American Telephone: (+1)123 321 1234').css('color', 'red');
                    }
                    else {
                        var Email = document.getElementById("email").value;
                        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                        if (!emailRegex.test(Email)) {
                            alert('Wrong Email! Please try again')
                            document.getElementById("email").style.color = 'red';

                            $('#error8').text('Error: Wrong Email! Please try again').css('color', 'red');
                        }
                        else {
                            checkCookie();

                            return true;
                        }
                    }
                }
            }
        }
    }
}

function checkCookie() {

    var cc = "";

    var Fname = document.getElementById("FName").value;
    var Lname = document.getElementById("LName").value;
    var Age = document.getElementById("age").value;
    var Country = document.getElementById("country").value;
    var Province = document.getElementById("SP").value;
    var PCode = document.getElementById("PCode").value;
    var Tel = document.getElementById("tel").value;
    var Email = document.getElementById("email").value;


    cc = cc + Fname + "|" + Lname + "|" + Age + "|" + Country + "|" + Province + "|" + PCode + "|" + Tel + "|" + Email;

    setCookie("userinfo", cc, 50)
    alert("Cookie for user iformation created \n" + document.cookie);

    window.open("User Identification page 2.html", "_self", true)
}

function checkCookie2() {
    var cc = getCookie("userinfo");
    var ccArray = cc.split("|");
    document.getElementById("FName").innerHTML = ccArray[0];
    document.getElementById("LName").innerHTML = ccArray[1];
    document.getElementById("Age").innerHTML = ccArray[2];
    document.getElementById("Country").innerHTML = ccArray[3];
    document.getElementById("Province").innerHTML = ccArray[4];
    document.getElementById("Pcode").innerHTML = ccArray[5];
    document.getElementById("Tel").innerHTML = ccArray[6];
    document.getElementById("Email").innerHTML = ccArray[7];

}

function deleteCookie() {
    var ccValue = getCookie("userinfo");
    
    if (ccValue == "") {
        alert("Cookie userinfo does't exist");
        
    } else {
        if (ccValue != null) {
            setCookieT("userinfo", "", -1);
            alert("Cookie userinfo deleted.");
            window.open("User Identification page 1.html", "_self", true);
        }
    }
}

function displayTimeOnLoad() {
    const clockElement = document.getElementById("STime");
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;

    setCookieT("STime", timeString, 50)
}

function displaytimeSpend() {
    var stime = getCookie("STime");
    var stArray = stime.split(":");

    const current = new Date();
    const hours = current.getHours().toString().padStart(2, '0');
    const minutes = current.getMinutes().toString().padStart(2, '0');
    const seconds = current.getSeconds().toString().padStart(2, '0');

    const stHours = parseInt(stArray[0]);
    const stMinutes = parseInt(stArray[1]);
    const stSeconds = parseInt(stArray[2]);


    if (hours < stHours || (hours === stHours && minutes < stMinutes) || (hours === stHours && minutes === stMinutes && seconds < stSeconds)) {
        document.getElementById("TimeSpend").textContent = "00:00:00";
    } else {
        const shours = hours - stHours;
        const sminutes = minutes - stMinutes;
        const sseconds = seconds - stSeconds;


        if (sseconds < 0) {
            sseconds += 60;
            sminutes--;
        }
        if (sminutes < 0) {
            sminutes += 60;
            shours--;
        }


        const Tspend = (hours - stHours) * 3600 + (minutes - stMinutes) * 60 + (seconds - stSeconds);


        document.getElementById("TimeSpend").innerHTML = Tspend + "s";
    }
}

document.write('<script src="../js/jquery-1.11.0.js"></script>');
//document.write('<script src="../js/jjs/basic-example.js"></script>');