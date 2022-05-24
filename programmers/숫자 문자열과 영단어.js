const a = "one4seveneight";

function solution(s) {
    const arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    arr.filter((x,index)=>{s = s.replace(arr[index],index);});
    return parseInt(s);

}
console.log(solution(a));