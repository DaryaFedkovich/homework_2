var day = prompt("Задание 9: введите количество дней", "");
var year = day / 365,
	mounth = day / 31,
	week = day / 7,
	our = day * 24,
	minutes = day * 1440,
	secunds = day * 86400;

if (day < 365)
	document.write("количество лет: меньше года<br/>");
else
	document.write("количество лет: " + year + "<br/>");
if (day < 31)
	document.write("количество месяцев: меньше месяца<br/>")
else
	document.write("количество месяцев: " + mounth + "<br/>");
if (day < 7)
	document.write("количество недель: меньше недели<br/>");
else
	document.write("количество недель: " + week + "<br/>");

document.write("количество часов: " + our + "<br/>", "количество минут: " + minutes + "<br/>", "количество секунд: " + secunds + "<br/>");
