function pickFortuneShip(){
var number;
number = Math.random();
console.log(number);

if(number < 0.1){
  return console.log("大凶");
}
 else if(number < 0.3){
   return console.log("凶");
 }
 else if(number < 0.5){
   return console.log("吉");
 }
 else if(number < 0.85){
   return console.log("中吉");
 }
 else {
   return console.log("大吉");
 }
}
