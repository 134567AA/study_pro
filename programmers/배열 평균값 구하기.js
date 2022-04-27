
const arr = [1,2,3,4];
let sum = 0;
let avg = 0;
function solution(arr) {
   for(let i=0; i < arr.length; i++){
       sum += arr[i];
      
   }
   return  sum / arr.length;
}
