# Entry

* webpack 으로 묶은 모든 라이버리들을 로딩할 시작점 설정
* a,b,c 라이브러리를 모두 번들링한 Bundle.js를 로딩한다
* 1개 또는 2개 이상의 엔트리포인트를 설정할수 있다

```javascript
var path = require('path');

module.exports = {
    entry : './app/index.js',
    /*외부 라이브러리 이용*/
    entry {
        app: '.src/app.js',
    vendor : './src/vendor.js'
    }
    /*페이지 별로 나눌수있음*/
    entry:{ 
        pageOne : //...
        pageTwo : //...
        pageThree : //...
    }
    /*결과물을 내는 곧*/
    output : {
        filename: 'bundle.js',
        path : path.resolve(__dirname,'dist')
    }
}
```