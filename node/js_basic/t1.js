//객체를 for문으로 돌리려면?
let data={
    name:'ABC',
    hash: '#신발|#운동화'
}
for (key in data){
    console.log(key,data[key])
}