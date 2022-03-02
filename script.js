// function seterror(id, error){
// 	element=document.getElementById(id);
// 	element.getElementsByClassName('formerror')[0].innerHTML = error;


// }
function valueForm() {

	$('.error').text('')
	var returnval = true;


	// method 1 to retrieve form value
	// var name = document.forms['myForm']['myName'].value;

	var name = $("#naam").val(); // method 2 to retrieve form value

	// console.log(name);
	// console.log(name.length);



	let pattern = /[^A-Za-z ] /;		//inside "[]"" = if any of the condition matches,value will be true ,and here there is a space outside "[]"" , It means there should be at least a apace in Name for Value=true.
	//let result = name.match(pattern);
	let result = pattern.test(name);

	if (name == null || name == "") {

		$('.namee').text("*Name cant be blank");

		returnval = false;

	}
	else if (name.length < 5) {
		$('.namee').text('*length of name cant be too short');
		returnval = false;

	}
	else if (name.length > 25) {
		$('.namee').text('*length of name cant be too long');
		returnval = false;

	}


	else if (result == true) {
		$('.namee').text('*only alphabets allowed.');

		returnval = false;
	};



	// var gender = $("#gender").val();
	// console.log(gender);

	var gender = $("input[name='myGender']:checked").val();
	// console.log(gender);

	if (gender != "m" && gender != "f") {
		$('.genderr').text('*please choose gender');

		returnval = false;

	}
	var Phoneten = $("#ten").val();
	parrernPhone = /[^0-9]/;
	let resultPhone = parrernPhone.test(Phoneten);
	if (resultPhone == true) {
		$('.phonee').text('*only numbers is allowed');

		returnval = false;
	}
	else if (Phoneten.length != 10) {
		$('.phonee').text('*Please enter 10 digit number');
		returnval = false;

	};

	var add = $("#add").val();
	if (add.length < 3) {
		$('.addresss').text('Address is too short')
		returnval = false;
	};
	var re = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

	var emailFormat = re.test($("#mail").val()); // This return result in Boolean type

	console.log(emailFormat);

	if (emailFormat!=true) {
		$('.emaill').text('email format should be "john@example.com"');
		returnval = false;
	 }

	/*var mailid = $("#mail").val();
	pattern = /\w/;
	pattern1 = /@+/;
	pattern2 = /^\s/;
	let result0 = pattern.test(mailid);
	let result1 = pattern1.test(mailid);
	let result2 = pattern2.test(mailid);
	console.log(result0);
	console.log(result1);
	console.log(result2);
	if (result1 == true && result2 == true && result2 == true) {
		$('.emaill').text('email format should be "john@example.com"');
		returnval = false;

	}*/


	return returnval;

}


