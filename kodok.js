function trainer (word){

var x = word.length
for (var i = 0 ; i < x  ; i ++){
    if(word [i] !== word [x - 1] ) {
        return false
    }else {
        return true
    }  
}
}

nama = trainer('kodoknkodoknkodok')
console.log (nama)