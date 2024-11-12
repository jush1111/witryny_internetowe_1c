for(let i =2; i <= 30; i++) {
    let czyPierwsza = true;
    for (let j = 2; j < i; j++){
        if (i % j === 0) {
            czyPierwsza = false;
            break;
        
        }
    }
    if( czyPierwsza ) {
        document.write(i + "- liczba pierwsza ");
    }
}