// 모듈화=> 누구나 사용할수 있다
// npm i --save mysql를 반드시 수행할것
var mysql      = require('mysql');

exports.selectLogin = ( uid, upw, cb ) => {

  // 개발 디비
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'nodedb'
  });
  // 상용 디비
  // var connection = mysql.createConnection({
  //   host     : 'node-db.cythlhij08x7.ap-northeast-2.rds.amazonaws.com',
  //   user     : 'root',
  //   password : '12341234',
  //   database : 'nodedb'
  // });
  connection.connect( (err)=>{  
    if( err ){  
      console.log( '디비 접속 오류', err )
    }else{    
      let sql = `SELECT * FROM users WHERE uid=? AND upw=?; `
      connection.query( sql, [uid, upw], (err, rows)=>{  
        console.log( typeof cb)    
        cb(err, rows)
        connection.end();      
      } )
    }  
  } );

}

// 불매 상품 목록 이름순으로 전부다 가져오기 함수
exports.selectNoSellData = ( cb ) => {
  // 개발 디비
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'nodedb'
  });
  connection.connect( (err)=>{  
    if( err ){  
      //console.log( '디비 접속 오류', err )
      cb( err, [] )
    }else{    
      let sql = `SELECT * FROM nosell ORDER BY name ASC;`
      connection.query( sql, (err, rows)=>{          
        
        cb(err, rows)
        connection.end();      
      } )
    }  
  } );
}

exports.selectitemBykeyword=(keyword,  cb)=>{
   // 개발 디비
   var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'nodedb'
  });
  connection.connect( (err)=>{  
    if( err ){  
      console.log( '디비 접속 오류', err )
    }else{    
      let sql = `SELECT * FROM nosell
      WHERE NAME LIKE '%${keyword}%' or
       chgName LIKE '%${keyword}%' or 
       HASH LIKE '%${keyword}%'
      ORDER BY NAME ASC;`
      console.log(sql)
      connection.query( sql, (err, rows)=>{  
        
        cb(err, rows)
        connection.end();      
      } )
    }  
  } );

}



exports.selectItemByNo = ( no, cb ) => {
  // 개발 디비
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'nodedb'
  });
  connection.connect( (err)=>{  
    if( err ){  
      cb( err, [] )
    }else{    
      let sql = `SELECT * FROM nosell WHERE NO=?;`
      connection.query( sql, [no], (err, rows)=>{     
        cb(err, rows)
        connection.end();      
      } )
    }  
  } );

}
