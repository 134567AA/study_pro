const a = "a234";
const b = "1234";
function solution(s) {
    const c = s.split("").join("");
    console.log(c);
    for(let i=0; i < c.length; i++){
        console.log(typeof(parseInt(c[i])));
        console.log(parseInt(c[i]) / 2);
        const d = isNaN(parseInt(c[i]) / 2 );
    
        if(d === true){
            return false
        }return true;
        
    }
}
 
console.log(solution(b));