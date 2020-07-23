function feetToMile(feet, mile)
                                {
                                    feet = 1;
                                    mile = feet*0.000189394;
                                    return mile;
                                }
var feet = 100000;
var mile = feet*0.000189394;
console.log("The amount of mile is", mile); 






function woodCalculator(chairN, tableN, bedN)
                                    {
                                      chairN=1*chair;
                                      tableN=3*table;
                                      bedN=5*bed;
                                      return chairN+tableN+bedN;      
                                    }
var chair =1;
var table= 2;
var bed= 3;
var chairN =1*chair;
var tableN= 3*table;
var bedN= 5*bed;
var result = woodCalculator(chairN, tableN, bedN);
console.log("You'll be needed", result ,"m^3 of wood")


function tinyFriend(num){
  var smallest = num[0];
  for(var i=0; i<num.length; i++){
  currentNumber = num[i];
  if (currentNumber<smallest){
  smallest=currentNumber;
  }
}
  return smallest;
}
var smallN = tinyFriend([4, 67,45, 3, 56, 78]);
console.log(smallN)






function brickCalculator(sum)
{
 var numberOfFloor = [0];
 

if(i<=10){
    {
    for( var i=0; i<=0; i++)
    var total = i*15000;
    var sum1 = 0;
    var sum1 = sum1 + total;
    }
    if(i<=20)
    {
    for( var i=0; i<=0; i++)
    var total = i*15000;
    var sum1 = 0;
    var sum1 = sum1 + total;
    for( var i=11; i<=20; i++)
    var total = i*12000;
    var sum2 = 0;
    var sum2 = sum2 + total;
    }

    if(i>20)
    {
    for( var i=0; i<=0; i++)
    var total = i*15000;
    var sum1 = 0;
    var sum1 = sum1 + total;
    for( var i=11; i<=20; i++)
    var total = i*12000;
    var sum2 = 0;
    var sum2 = sum2 + total;
    for( var i=21; i>20; i++)
    var total = i*10000;
    var sum3 = 0;
    var sum3 = sum3 + total;
    }
    sum = sum1+sum2+sum3;
    console.log("You'll need",sum,"bricks");
    }      
    else { 
    console.log("Please, give input with proper number")
    }
}
var numberOfFloor = 20;
var result =brickCalculator(sum);
console.log(result); 



