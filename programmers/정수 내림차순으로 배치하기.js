const a = 118372;
const solution = (n) =>{
     // join : 배열에서 문자열로 바꿔줌
    return parseInt(String(n).split('').sort((a,b)=>b-a).join(''));  

}

console.log(solution(a));