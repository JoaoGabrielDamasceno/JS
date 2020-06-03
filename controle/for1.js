/*let contador = 1

while(contador <= 10){
    console.log('contador = ' + contador)
    contador++
}

for(let i =  0; i<=10; i++){
    console.log(`i = ${i}`)
    console.log(contador)
}

{
    let x = 55
    console.log('x = ' + x)
    console.log('contador ' + contador)
}

const notas = [6, 7, 9, 8 ,5]
for(i = 0; i < notas.length; i++){
    console.log('nota ' + notas[i])
}

console.log(x)
*/
function imprimeFizzBuzz(){
    for(let i =1; i<=100; i++){
        if((i%3==0) && (i%5==0)){
            console.log("FizzBuzz")  
        }else if(i%3==0){
            console.log("Fizz")
        }else if((i%5==0)){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

console.log(imprimeFizzBuzz())