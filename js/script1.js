var name, 
	age,
	city,
	phone,
	email,
	company;

var Name = prompt('Your name is..?', name);
var Age = prompt('How old are you?', age);
var City = prompt('You live in..?', city);
var Phone = prompt('Phone...', phone);
var Email = prompt('Your email...', email);
var Company = prompt('What company do you work?', company);

document.write("Задание 1");
document.write("My name is " + Name + ". I am " + Age + ".<br/> I live in " + City + "and work for " + Company + ". <br/> My contacts - phone: " + Phone + ", email: " + Email + ".<br/>");
