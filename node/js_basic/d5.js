//모듈화 => 누구나 사용할수 있다.
var mysql = require('mysql');

exports.selectLogin = (uid,upw,cb) =>{
    var connection = mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'node'
    });

    connection.connect((err) => {
        console.log(err ? '접속오류' : '접속성공')
        if (err) {
           // console.log('접속오류', err)
        } else {

            let sql = `SELECT * FROM USERS WHERE UID=? AND upw=?;`

            connection.query(sql, [uid, upw], (err, rows) => {
                cb(err, rows)


               // console.log(err, rows[0].name)
                connection.end()
                console.log('접속종료')

            })
        }
    });
}

 selectLogin('guest','2',(err, results)=>{
    if(results.lenth>0)

    console.log('회원이다.',results[0].name+'님 방갑습니다')
    
    else
    console.log('회원이 아니다', '아이디나 비번을 확인하세요')
})