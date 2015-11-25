function pickFortuneShipNtimes(value){
var number;
var i = 0;
var daikichi = 0;
var chukichi = 0;
var kichi = 0;
var kyou = 0;
var daikyou = 0;

while (i<value){
number = Math.random();
if(number < 0.1){
  daikyou = daikyou + 1;
}
 else if(number < 0.3){
   kyou = kyou + 1;
 }
 else if(number < 0.5){
   kichi = kichi + 1;
 }
 else if(number < 0.85){
   chukichi = chukichi + 1;
 }
 else {
   daikichi = daikichi + 1;
 }
 i = i+1;
}

console.log("大吉"+":"+daikichi);
console.log("中吉"+":"+chukichi);
console.log("吉"+":"+kichi);
console.log("凶"+":"+kyou);
console.log("大凶"+":"+daikyou);

}
