function solution(n){
    let sum =0;
    for(let i=0; i <= n ; i++ ){
        n%i===0 ? sum += i  : "띵" 
    }
    return sum;
}
console.log(solution(7));