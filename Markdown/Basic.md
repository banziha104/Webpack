# Webpack Basic

* 서로 연관관계가 있는 웹 자원들을 js,css,img 와 같은 스태틱한 자원으로 변환해주는 모듈 번들러
* JS의 역할이 커짐에 따라 Client Side 들어갈 코드량이 많아지고 복잡해지기 떄문에 필요
* chunk단위로 나눠 필요할 떄 로딩
* 모듈화문제를 해결할 강력한 기능

```html
<script src ="module1.js"></script> <!--전역변수, 함수이름 등이 충돌할 가능성이 있-->
<script src ="module2.js"></script>
<script src ="module3.js"></script>
```

<br />

---

# Webpack Get Started

1. npm i webpack -g : 웹팩 글로벌 설치
2. npm init -y : package.json 파일 설치
3. index.js & index.html 설치
4. npm i lodash --save : lodash 라이브러리 설치
5. import _ from 'lodash'; : lodash 임포트
7. webpack.config.js 생성
8. webpack 명령어 입력

```javascript
var path = require('path');

module.exports = {
    entry : './app/index.js', // 대상의미
    output : {                // 출력
        filename: 'bundle.js',
        path : path.resolve(__dirname,'dist')
    }
}
```


 