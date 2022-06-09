const alpa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const lower = alpa.join(""); 

const solution=(s,n)=>{
    const arr = [];
    const  arr2 = [];
    if(s == s.toUpperCase()){
        for(let i=0; i < s.length;i++){
        const a =  s.charAt(i).toLowerCase();
        const b = lower.indexOf(a);
           arr.push(lower.charAt(b + n).toUpperCase());}
        return arr
    } else {
        for(let i=0; i < s.length;i++){
            const c = s.charAt(i);
        const d = lower.indexOf(c);
        arr2.push(lower.charAt(d + n));
        console.log(arr2);}
    return arr2;
}


}
console.log(solution("z",1))



//태훈오빠 답

/*
const a = "AB";
const b = 1;

const solution2 = (s, n) => {
    
    const alpa = "abcdefghijklmnopqrstuvwxyz";
    const arr = [];

    for(let i=0; i<s.length; i++){

        // 1. alpa가 소문자이므로 s를 소문자로 만든다.
            const c = s.charAt(i).toLowerCase(); // a b

        // 2. A, B가 alpa에 어느 위치에있는지 찾는다. index값을 찾기위해서
        // indexOf
            const d = alpa.indexOf(c); // 0, 1

        // 3. charAt 으로 n 만큼 멀어진걸 뽑는다.

           arr.push(alpa.charAt(c + n));

           // alpa.charAt(i) // a b
           // alpa.charAt(d + n) // 1 2
           // alpa.charAt(1), alpa.charAt(2) b, c
           // arr = [ b, c ]

           

    }

}
console.log(solution2(a, b));*/