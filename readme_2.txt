
npm init -y
-> package.jason 생성
-> cheerio 모듈은 html dom으로 올려서 csss selector를 통해 데이터를 추출하는 모듈
-> cheerio 모듈은 html에서 데이터 추출하는 모듈-> 데이터 구축 : 추출=> 디비에 적재

$ npm 1 --save cheerio
$ npm i --save request

const request = require('request')
const cheerio = require('cheerio')
let target.site= 'http://nonojapan.com/'