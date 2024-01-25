//your JS code here. If required.
function myfunc(){
	//get data from form
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var phonenumber = document.getElementById("phonenumber").value;
	var email = document.getElementById("email").value;
	// display popup message
	var popup = "First Name: " + firstname + "\nLast Name: " + lastname + "\nPhone Number: " + phonenumber + "\nEmail ID: " + email;
	alert(popup);
}
function colorfunc(){
	var color = document.getElementById("submitbutton").value;
	color.style.backgroundColor = "Aqua";
}