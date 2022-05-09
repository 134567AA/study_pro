const a = [40,15,99,100];


function solution(arr) {
    if(arr.length === 1){
        return -1;
    }else{
         arr.sort((a,b) => {return b - a}); //내림차순으로 정렬
         arr.pop();
        
    }
   return arr;
}
console.log(solution(a));

