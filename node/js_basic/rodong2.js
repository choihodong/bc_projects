//구구단 해보자

for(let i=1; i<9; i++){
    for(let j=1; j<9; j++){
        console.log(i + 'x'+ j + i*j)
    }
}



function add(a,b){
    b(a+1)
}
add(3, function(data){
    console.log(data)
})