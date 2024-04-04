let d=new Date();
console.log(d);

let date=new Date("2000-10-24");
console.log(date);

/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/ 

console.log(new Date());
console.log(new Date(2024,3));
console.log(new Date(2000,10,24,12));
console.log(new Date(2021,2,23,4,45));
console.log(new Date(2000,10,24,5,45,24));
console.log(new Date(2000,10,24,6,50,30,60));

var d1= new Date("Mar 25 2015"); 
console.log(d1);

var parsedate = Date.parse("March 21, 2012");
console.log(parsedate);
var date1=new Date(parsedate);
console.log(date1);

//getMethods
console.log(date1.getFullYear()+ " "+date1.getDate()+" "+date1.getDay()+" "+date1.getMonth());

//setMethods
/*
const date = new Date();
date.setFullYear(2025);
date.setMonth(4); // Month is 0-based (0 for May)
date.setDate(15);
date.setHours(13);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);
*/ 

var date2=new Date();

date2.setFullYear(2025);
date2.setMonth(3);

console.log(date2);

console.log(date2.toDateString());
;