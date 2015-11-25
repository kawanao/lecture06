function drawLottimes(value){
var number;
var i = 0;
var a = 0;
var h = 0;

while (i<value){
number = Math.random();
if(number >= 0.7){
    a = a+1;
}
else{
    h = h+1;
}
i = i+1;
}

console.log("あたり"+":"+a);
console.log("はずれ"+":"+h);
}
