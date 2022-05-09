 const a = 12345;
 

 const solution = (n) =>{
    const arr = []; // 빈 배열 만들어줌
    const b = String(a).split('').reverse(); // number >> string : String() | string >> parseInt() 
   
     for(let i=0; i < b.length; i++){  //["5","4","3","2","1"] 문자타입임 
     arr.push(parseInt(b[i])); //빈 배열 arr에 문자타입을 숫자로 바꿔서 푸쉬
    }
    
     return arr;
}

console.log(solution(a));