const a = "try hello world";

// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
 
function solution(s) {
    const alpa = a.split("");
    let answer = [];

    for(let i=0; i < alpa.length; i++){
        if(i % 2 === 0){
            answer.push(alpa[i].toUpperCase());
        }else{
            answer.push(alpa[i].toLowerCase());
        }
    } 
   return answer.join('');
}
solution(a);