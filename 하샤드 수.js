const a = 11;

function solution(arr) {
    let sum =0;
    const b =(String(arr).split(""));
    console.log(b)


    for(let i = 0 ; i < b.length; i++){
        sum += parseInt(b[i]);
     
    }   
    console.log(sum);
    if(a % sum === 0){
    return true;
    }else return false
  
}
console.log(solution(a));