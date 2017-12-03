# Output

> entry 에서 설정하고 묶은 파일의 결과값을 설정

```javascript
var path = require('path');

module.exports = {
    entry : './app/index.js',
    /*엔트리 포인트*/
    output : {
        filename: 'bundle.js',
        path : path.resolve(__dirname,'dist') 
        // filename: '[name].js' 로 분기할 경우 나올수도 있
    }
}
```

<br />

---

# Output Name

* [name] : 엔트리명에 따른 output 파일 생성
* [hash] : 특정 webpack build에 따른 output 파일명 생성
* [chunkhash] : 특정 webpack chunk에 따른 output 생성

```javascript
output:{
 filename : '[name].js',//1
 filename : '[hash].js',//1
 filename : '[chunkhash].js'//1
}
```