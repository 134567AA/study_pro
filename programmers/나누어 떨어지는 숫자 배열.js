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

// 오름차순
const aa = [10, 3, 12, 2];

const b = aa.sort((a, b)=>{ return a - b });
console.log(`오름차순 : ${b}`);

// 내림차순
const c = aa.sort((a, b)=>{ return b - a });
console.log(`내림차순 : ${c}`);
