var a = 10,
	b = 2;

var sum = a + b;
var raznost1 = a - b;
var raznost2 = b - a;
var proizved = a * b;
var chastnoe1 = a / b;
var chastnoe2 = b / a;
var kvadrat = 0;
document.write("Задание 5 <br/>");
document.write("суммa = " + sum + "<br/>");
document.write("разность(a-b) = " + raznost1 + "<br/>");
document.write("разность(b-a) = " + raznost2 + "<br/>");
document.write("произведение = " + proizved + "<br/>");
document.write("частное(a/b) = " + chastnoe1 + "<br/>");
document.write("частное(b/a) = " + chastnoe2 + "<br/>");

if (sum > 1)
	kvadrat = Math.pow(sum, 2);
document.write("квадрат суммы = " + kvadrat + "<br/>");