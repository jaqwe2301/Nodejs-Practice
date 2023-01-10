const express = require('express')
const app = express()
const port = 4000
// const bodyParser = require('body-parser')
const { User } = require("./models/User");

//application/x-www-form-urlencoded
//위 형식의 파일을 분석해줄 수 있는 코드
app.use(express.urlencoded({extended: true}));

//application/json
//위 형식의 파일을 분석해줄 수 있는 코드
app.use(express.json());

const moogoose = require('mongoose')
moogoose.connect('mongodb+srv://minhyeok:zlvj4381@nodejs-practice.4xfzaz3.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('몽고DB 연결됨'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('워메, 만나서 반갑데이')
})

app.post('/register', (req, res) => {

  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    // user에서 받은 데이터를 저장하는 코드, err이면 success : false
    user.save((err, userInfo) => {
      if(err) return res.json({ success: false, err})
      return res.status(200).json({
        success: true
      })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Model은 schema(스키마)를 감싸주는 역할