function getFormvalue() {
    //Write your code here
	const form1=document.getElementById("form1");
	let first=form1.elements["fname"].value;
     let last=form1.elements["lname"].value;
	alert(`${first} ${last}`);
	
}
document.getElementById('submitButton').addEventListener('click', function() {
            this.classList.add('clicked');
        });
document.getElementById("form1").addEventListener('submit',function(ev){
ev.preventDefault();
	getFormvalue();
})