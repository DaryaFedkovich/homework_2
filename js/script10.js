var day = prompt("Задание 10 введите число: ", "");
/*
january 1-31
fabruary 32-59
march 60-90
april 91-121
may 122-152
june 153-183
jule 184-214
august 215-244
sptember 245-274
october 275-305
november 306-335
decenmer 336-365
*/
if(day >= 1 && day <= 31){
    document.write("January <br />");
}
else if( day >= 32 && day <= 59){
    document.write("February <br />");
}
else if( day >= 60 && day <= 90){
    document.write("March <br />");
}
else if( day >= 91 && day <= 121){
    document.write("April <br />");
}
else if( day >= 122 && day <= 152){
    document.write("May <br />");
}
else if( day >= 153 && day <= 183){
    document.write("June <br />");
}
else if( day >= 184 && day <= 214){
    document.write("Jule <br />");
}
else if( day >= 215 && day <= 244){
    document.write("August <br />");
}
else if( day >= 245 && day <= 274){
    document.write("September <br />");
}
else if( day >= 275 && day <= 305){
    document.write("October <br />");
}
else if( day >= 306 && day <= 335){
    document.write("November <br />");
}
else if( day >= 336 && day <= 365){
    document.write("December <br />");
}
switch(true){   
    case day >= 1 && day <= 59 || day >= 336 && day <= 365:
    document.write("Winter");
    break; 
    case day >= 60 && day <= 152: 
    document.write("Spring");
    break; 
    case day >= 153 && day <= 244:
    document.write("Summer");
    break; 
    case day >= 245 && day <= 335:
    document.write("Autum");
    break; 
    default:
    	document.write("Число вне диапозона");
        break;
}
