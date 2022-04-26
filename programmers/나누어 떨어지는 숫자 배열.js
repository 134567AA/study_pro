const arr = [5,9,7,10];
const divisor = 5
function solution(arr,divisor) {

    let answer =[];
    
   for(let i =0 ; i < arr.length; i++){
       console.log(`i : arr[i]`);
       
        if(arr[i] % divisor == 0) {
         console.log("44");
        } 
        
   }
    return answer;
   
}
solution(arr,divisor);