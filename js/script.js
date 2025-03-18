//Dichiaro le variabli che mi serviranno durante il corpo del codice
let fizz = "Fizz";
let buzz = "Buzz";
//inizializzo il ciclo for da 1 a 100
for (let i=1; i<=100; i=i+1){
    if (i%3 == 0 && i%5 == 0){
        //se il numero è divisibile sia per 3 che per 5 stampo fizzbuzz, quindi questo significherà che mi daranno resto 0 entrambi
        console.log(fizz + buzz);
    }
    else if (i%3 == 0){
        //se saranno solo divisibili per 3, quindi mi daranno resto 0, stampo fizz
        console.log(fizz);
    }
    else if (i%5 == 0){
        //se saranno solo divisibili per 5, quindi mi daranno resto 0, stampo buzz
        console.log(buzz);
    }
    else{
        //altrimenti stampo solo il numero
        console.log(i);
    }
}
