var login_username="admin";
var login_password="12345";

/*
<!-- Mike Jun Yang, Chiu Lim 
Description: Lab 4.3 Javascript
Date: 12.06.23                 -->
*/

function login()
{
let v1, v2;
//v1 = document.login_form.username.value; //old access format using the name not the id
//v2 = document.login_form.password.value;

//v1 = document.getElementById('uname').value.toLowerCase(); //using the method
v2 = document.getElementById('psw').value;
	//if ((v1 == login_username) &&
	if(document.getElementById('uname').value == login_username &&
	   (v2 == login_password))
	{
		parent.location.href ="index (Signed in).html";
	}
	else
	{
	    alert("Enter Username: admin & Password: 12345");
		parent.location.href ="index (Signed out).html";
	}
}

function logOut()
{
		parent.location.href ="index (Signed out).html";
}
