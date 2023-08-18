var todayDate = new Date();
console.log(todayDate,"How to find today Date using Date Function")
console.log(todayDate.getDate(),"getDate Function")
console.log(todayDate.getDay(),"GetDay Function")
console.log(todayDate.getFullYear(),"GetFullYear Function")
console.log(todayDate.getHours(),"GetHours Function")
console.log(todayDate.getMonth(),"getMonth Function")
console.log(todayDate.getSeconds(),"getSeconds Function")
console.log(todayDate.getMilliseconds(),"getMilliseconds Function")
console.log(todayDate.getTime(),"getTime Function")
console.log(todayDate.toLocaleTimeString('en-US' , { hour12: true}),"Find Time is AM or PM")


var dateUser = new Date('2010/08/12')
console.log(dateUser)
console.log(Date.parse('2000,03,23'),"getparse Function")

//Math Functions
//Round
console.log(Math.round(3.4),"Math Round");
//Ceil
console.log(Math.ceil(3.7),"Math Ceil");
//Floor
console.log(Math.floor(4.8),"Math Floor");
//Trunc
console.log(Math.trunc(3.9),"Math Truncation");
//Min
console.log(Math.min(23,12,0,-1),"Math Min Function");
//Max
console.log(Math.max(12,18,4,29),"Math Max Function");
//Squaren root
console.log(Math.sqrt(4),"Math Square root");
//Absolute
console.log(Math.abs(-100),"Math Absolute number");
