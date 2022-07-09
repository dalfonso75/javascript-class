!"" && console.log("false");
!0 && console.log("false");
!-0 && console.log("false");
!NaN && console.log("false");
!null && console.log("false");
!undefined && console.log("false");
!false && console.log("false");


function a() {console.log();} 
const objectTest = {a: 45} 

"hello" && console.log("true");
42 && console.log("true");
true && console.log("true");
[] && console.log("true");
[1, '2', 3] && console.log("true");
objectTest && console.log("true");
a && console.log("true");
