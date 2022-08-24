
1) Given a square matrix, calculate the absolute difference between the sums of its diagonals.
............................
............................
ANSWER

function diagonalDifference(arr) {
     var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}


2) Given an array of integers, where all elements but one occur twice, find the unique element
............................
............................
ANSWER

function lonelyinteger(a) {
var xor = a.reduce((a,b) => a ^ b);
var arr = a.filter(x => x && xor).reduce((a,b) => a ^ b);
return arr;
}

3) Given a time in -hour AM/PM format, convert it to military (24-hour) time.
............................
............................
ANSWER

function timeConversion(s) {
const slicedTime = s.split(/(PM|AM)/gm)[0]
let [hours,minutes,seconds] = slicedTime.split(':');
if(hours === '12'){
    hours = '00'
}
if (s.endsWith('PM')){
    hours = parseInt(hours, 10) + 12;
}
return `${hours}:${minutes}:${seconds}`
};
