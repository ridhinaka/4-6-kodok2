var text = 'Mengerjakan gubernemen janganlah malas. Zahir dan batin janganlah culas. Jernihkan hati hendaklah ikhlas. Seperti air didalam gelas'

function paragraph (text) {
    var sentences = text.split('.')
    var lines = []
    for (var i = 0 ; i < sentences.length - i; i++){
        console.log  (i)
        lines.push((i+1) +'.' + ' ' + sentences[i].trim() +'.')
    }

return lines    
}

newText = paragraph(text)
console.log(newText.join('\n'))