
const a =["leo","kiki","eden"];
const b = ["eden","kiki"];

const solution=(participant, completion)=>{    
    let answer = [];
    const c = completion.map(x=>{
        if(participant.includes(x))
        {return participant.indexOf(x);}
    });
    console.log(c);
    for(let i =0; i < c.length; i++){
        participant.splice(c[i],1,'');
        answer.push(participant);
    }
    console.log(answer);
    const d = participant
}
console.log(solution(a,b))