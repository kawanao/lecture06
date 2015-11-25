function drawLot(){
var number;
number = Math.random();
console.log(number);

if(number >= 0.7){
  return console.log("あたり");
}
else{
  return console.log("はずれ");
}

}
