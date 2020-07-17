//Problem No: 01//
//Convert Feet To Mile//
function feetToMile(feet) {
    if (feet < 0) {
        return invalid
    }
    else {
        var mile = feet / 5280;// 1 mile = 5280 feet//
        return mile;
    }
}
var invalid = "Please, Input A Positive Number";//warning for negative number// 
var firstinput = feetToMile(6500);
var secondinput = feetToMile(528000);
console.log(firstinput);
console.log(secondinput);

// Problem No: 02//
// Wood Calculator problem solve//
function woodCalculator(forchair,fortable,forbed) {
  
    var chair = 1 * forchair;
    var table = 3 * fortable;
    var bed = 5 * forbed;
    return (chair + table + bed) ;
}
var firstinput = woodCalculator(1,1,1);
var secondinput = woodCalculator(5,5,4);
console.log("Total Ammount of Wood Needed : "+ firstinput + " Cubic feet");
console.log("Total Ammount of Wood Needed : "+ secondinput + " Cubic feet");


// Problem No: 03//
// Brick Calculator Problem Solve//
function brickCalculator(bricks){
    var n = bricks
    if(n <= 10) {
        return n*1000*15;
    }
    else if(n > 10 && n <= 20) {
        return 150000 + (n-10)*1000*12;
    }
	else {
        return 270000 + (n-20)*1000*10;
    }
}
var firstinput = brickCalculator(25);
console.log('Total Bricks: ' + firstinput);


//Problem No: 04//
//Tiny Friend Problem Solve//
function tinyFriend(myfriend){
    var smallname= myfriend[0];
    for(var i=1; i<myfriend.length; i++){
        var currentname=myfriend[i];
        if(currentname.length<smallname.length){
        smallname=currentname;
        }
    }
    return smallname;
}
var my=tinyFriend(['rahim','erin','joty','era','hasib','rifat']);
console.log('Tinyname from the array: '+ my);

// End OF Assignment//

