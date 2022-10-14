let frase = ''
function recursive(rep){
    if(rep > 0) {
        frase += 'chuck'
        rep--
        if(rep > 0) {
            frase += '-'
            recursive(rep)
        } 
            return frase
    }
}

module.exports = recursive