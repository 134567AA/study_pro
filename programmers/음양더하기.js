const a = [1,2,3];
const b= [false,false,true];
let sum = 0;
function solution(absolutes, signs) {
    for(let i =0; i < absolutes.length; i++){
        if(signs[i] == true){
            sum += absolutes[i];
        }else if(signs[i] == false){
            sum -= absolutes[i];
        }
    }
    return sum;
 }
console.log(solution(a,b));