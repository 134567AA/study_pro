const express = require('express');
const path = require('path'); //파일 경로 
const bodyParser = require('body-parser');
const indexRouter = require('./router');
const userRouter = require('./router/user')


const app = express();

app.use('/',indexRouter); // 라우터를 사용할 때는 app.use를 써서 

app.use('/user',userRouter);

app.use((req,res,next)=>{
res.status(404).send("not found");
})

app.set('port',process.env.PORT || 3000); // 포트번호 설정(set);

app.get('/',(req,res)=>{      
    // res.send("Hello Express!");
    res.sendFile(path.join(__dirname,'/index.html'));
})
 //브라우저가 '/'에 들어가면 헬로 익스프레스로 응답해줌 ('/'은 localhost:3000과 같다) 

//body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended : false }));

//body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});