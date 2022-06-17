const express = require('express');

const router = express.Router();

//GET / 라우터
router.get('/',(req,res)=>{
    res.send("Hello Index!");
})

module.exports = router; // 나가서 다른 파일에서도 사용이 가능하게 만들어주는 명령어 (꼭 써줘야함)