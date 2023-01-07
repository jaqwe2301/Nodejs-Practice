const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 띄어 쓰기를 없애는 역할 ex. asdf ghj@naver.com
        unique: 1 // 똑같은 이메일을 쓰지 못하게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50 
    },
    role: { // 일반 유저(0), 관리자(1) 분리 
        type: Number,
        default: 0
    },
    image: String,
    token: { // 유효성 관리
        type: String
    },
    tokenExp: { // 토큰을 사용할 수 있는 기간 (유효기간)
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }