const mysql = require('mysql');
 // createConnection를 이용하여 mySQL과 연동하는 방법
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'carpediem1.',
    database: 'server3'
});

// 접속 
connection.connect();

connection.query('SELECT * FROM member where name="지우"', (error, results, fields) => {
// 첫번째 인자는 sql, 두번째 인자는 콜백함수
// 첫번째 인자의 sql이 데이터베이스 서버에 응답

    if(error){
        console.log('에러났다!'+error);
        // ER_NOT_SUPPORTED_AUTH_MODE >> alter user 'root'@'localhost' identified with mysql_native_password by 'sql 비번';
    }
    console.log(results);


});
connection.end();