// ObjectId를 대체할 shortId module 생성(Mongoose Custom Type)
const { nanoid } = require('nanoid'); //중복 없는 문자열 생성해주는 패키지

// shortId model : ObjectId를 대체할 아이디 자동 생성
const shortId={
    type: String,
    default: () => {
        return nanoid();
    },
    // 검색의 유용함을 위해 지정
    require: true,
    index: true,
}

// shortId module exporting
module.exports=shortId;