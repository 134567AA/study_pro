const a = [1,1,3,3,0,1,1];

function solution(arr)
{

    const b = a[0];
    var result = [a[0]];
    for(let i=0; i < arr.length;i++){
        if(b === arr[i]){continue}
        else {result.push(arr[i])}
    }
    return result

}
console.log(solution(a))
