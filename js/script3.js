var stroka = prompt("vvod stroki: ");
if (stroka.length == 6)
{	
	if ((Number(stroka[0])+Number(stroka[1])+Number(stroka[2])) == (Number(stroka[3])+Number(stroka[4])+Number(stroka[5])))
		{document.write("true <br/>");}
	else 
		{document.write("false <br/>");}
}
else{
	alert("stroka dolgna sodergat 6 simvolov");
}
