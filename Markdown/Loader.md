# Loader

> loader를 이용하여 다른 형태의 웹 자원들(img,css,coffiescript) 웹 자원들 js로 변환하여 로딩

> babel Loader

1. npm init -y package.json 생성
2. npm 명령어로 loader & plugin 설치
3. index.html , app/index.js, base.css 생성
4. webpack.config.js 생성
5. webpack 실습

```javascript
var path = require('path');

module.exports = {
    entry : './app/index.js',
    output : {
        filename: 'bundle.js',
        path : path.resolve(__dirname,'dist')
    },
  module : {
        rules : [{
            test : /\.css$/,
            use: ['style-loader','css-loader']
        }]
  }

};


```

# Ex

```javascript
var path = require('path');

module.exports = {
    entry : './app/index.js',
    output : {
        filename: 'bundle.js',
        path : path.resolve(__dirname,'dist')
    },
  module : {
        rules : [{
            test : /\.css$/,
            // use: ['style-loader','css-loader']
          use : ExtractTextPlugin.extract({
            fallback: "style-loader",
            use:"css-loader"
          })
        }]
  },
  plugins:[
    new ExtractTextPlugin('styles.css');
  ]
};


```