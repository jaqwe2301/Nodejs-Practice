// const mongoose = require('mongoose');

// mongoose.set('strictQuery', true);

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         maxlength: 50
//     },
//     email: {
//         type: String,
//         trim: true, // 띄어 쓰기를 없애는 역할 ex. asdf ghj@naver.com
//         unique: 1 // 똑같은 이메일을 쓰지 못하게
//     },
//     password: {
//         type: String,
//         minlength: 5
//     },
//     lastname: {
//         type: String,
//         maxlength: 50 
//     },
//     role: { // 일반 유저(0), 관리자(1) 분리 
//         type: Number,
//         default: 0
//     },
//     image: String,
//     token: { // 유효성 관리
//         type: String
//     },
//     tokenExp: { // 토큰을 사용할 수 있는 기간 (유효기간)
//         type: Number
//     }
// })

// const User = mongoose.model('User', userSchema)

// module.exports = { User }

const mongoose=require('mongoose');
//User 도메인 테이블을 생성하기 위한 스키마
const userSchema=mongoose.Schema({
    name:{
        type: String,
        maxlength: 50,
    },
    email:{
        type: String,
        // space bar(띄어쓰기)를 없애준다.
        trim: true,
        // 중복을 허용하지 않는다.
        unique: 1
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname:{
        type:String,
        maxlength:50,
    },
    role:{
        type:Number,
        // 기본값
        default: 0,
    },
    image: String,
    token:{
        type:String,
    },
    tokenExp:{
        type: Number,
    }
});
// User를 model화 해준다.
const User=mongoose.model('User', userSchema);

// 다른 파일에서도 이 모델을 쓸 수 있도록
module.exports={ User }