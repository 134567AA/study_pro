const a = 123;

function solution(n){
  let answer =  String(n).split("").reduce((acc,cur)=>
      acc += Number(cur),0);
    
  return answer;
}

console.log(solution(a))