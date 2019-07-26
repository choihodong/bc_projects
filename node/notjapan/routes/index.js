var express = require('express');
var router = express.Router();
let db = require('./db')
/* GET home page. */
// 요청이 들어오면 해석을 하는데, 
// 만약, get방식이고, 주소가 / 이면 아래 함수가 호출된다 => 라우팅
router.get('/', function (req, res, next) {
  // 세션이 없으면 /users/login으로 이동
  if(typeof req.session.uid==='undefined'|| req.session.uid===null){
    res.redirect('/users/login')
    return
  }
  // views/index.ejs 파일을 읽어서 전달한 데이터를 사용해서 완성된 html을 응담한다 => 랜더링한다
  // 랜더링의 대상 ejs파일은 무조건 views 밑에서 찾는다
  res.render('index', { title: 'Express점심11:50', name: req.session.name });
});

// ~/search
router.get('/search', (req, res, next) => {
  // 1. 사이트가 요청이 들어오면, noSell 테이블에서 이름순으로 전체 데이터를 가져온다->sql
  db.selectNoSellData((err, rows) => {
    //console.log( rows )
    // 2. 데이터를 렌더링할때 전달한다
    res.render('search', { rows: rows });
    // 3. search.ejs 내부에서 데이터를 반복해서 추출하여 화면을 구성한다 => search.ejs 이동


  });
})
router.get('/search2', (req, res, next) => {
  console.log(req.query.keyword)
  db.selectitemBykeyword(req.query.keyword, (err, rows) => {
    console.log(rows)
    res.json(rows)
  })
})

router.get('/info/:no', (req, res, next) => {
  console.log(req.query.u, typeof req.query.u==='undefined')
//u값을 기준으로 존재하지 않으면 미리보기화면, 값이 존재하면 수정화면으로 설정하겠다.
 
//res.end('product no:' + req.params.no)
  //no를 넣어서 해당 삼품 정보를 가져와서 화면에 뿌린다
  //함수명: selectItemByno
  db.selectItemByNo(req.params.no, (err, rows) => {
    console.log(rows)
    if( rows.length > 0 ){
      // 4. rows 데이터가 존재하면 처리 res.render() 위치시킴
      res.render( 'info', { row:rows[0], update:typeof req.query.u !='undefined'} )
    }else{
      // 3. rows 데이터가 없다면 처리 res.render() 위치시킴
      res.end('no item' )
    }   

  })

});


module.exports = router;
