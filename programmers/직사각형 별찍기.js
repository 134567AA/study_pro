const a = 5;
const b = 3;

const solution = (n, m) =>{

    const arr = [];

    for(let i=0; i<m; i++){ // 0 1 2

        console.log(i);

        for(let j=0; j<n; j++){

            console.log(j);
            arr[i][j] = '*';
        }
    }
}

solution(a, b);