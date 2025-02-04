function czypierwsza(a){
    isprime = true;
    for(let i =2; i <= a/ 2; i++) {
        if(a % i  === 0) {
            isprime = false;
            break;
        }
    }
    if (isprime)
        console.log( a = "liczba jest pierwsza")
    else
        console.log( a = "liczba  nie jest pierwsza")
}
czypierwsza(prompt());