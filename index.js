const express = require('express')
const app = express()
const port = 5000

const moogoose = require('mongoose')
moogoose.connect('mongodb+srv://minhyeok:zlvj4381@nodejs-practice.frualie.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('몽고DB 연결됨'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('워메, 만나서 반갑데이')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Model은 schema(스키마)를 감싸주는 역할