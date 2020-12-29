function kata(name){
    let kalimat = []
    for(i = 0; i < name.length; i++ ){
        if(name[i]=='a' || name[i]=='i'||name[i]=='u'||name[i]=='e'||name[i]=='o'){
        kalimat.push('x')   
        }else{
        kalimat.push(name[i])
        }
    }
return kalimat
}

namaorang = kata("belajar DDP")
console.log(namaorang.join(''))