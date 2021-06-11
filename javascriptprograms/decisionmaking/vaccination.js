// read num
// num / by 3 print fiz 
// num / by 5 print buz
// num / 15 print fizbuz


var num=15;
var res="";
if(num %3==0){ //15%3==0
    res+="fiz";  //res="fiz"
}

if(num %5==0){ //15%5==0
    res+="buz"; //"fiz+buz"
}

console.log(res); //fiz

// if(num%15==0) {
//     console.log("fizbuz");
// }
// else if(num%3==0){
//     console.log("fiz");
// }
// else if(num%5==0){
//     console.log("buz");
// }
