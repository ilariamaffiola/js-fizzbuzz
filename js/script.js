//Dichiaro le risposte che mi serviranno durante il corpo del codice
let fizz = "Fizz";
let buzz = "Buzz";
for (let i=1; i<=100; i=i+1){
    if (i%3 == 0 && i%5 == 0){
        console.log(fizz + buzz);
    }
}
