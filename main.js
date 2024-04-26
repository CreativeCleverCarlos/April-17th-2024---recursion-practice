

//recursion is just a function that calls upon itself

//recursion is a programming technique that finds a solution for one big problem, that solves a bunch of little problems that adds up to the big problem. it calls upon itself over and over until it solves it

//think of it like a loop function, only it's used when a loop function is to complicated

//https://www.youtube.com/watch?v=6oDQaB2one8&ab_channel=WebDevSimplified 

//the above video does a good job of explaining it nicely

function countdown(n){
    for (let i = n; i > 0; i--){
        console.log(i)
    }
    console.log('Hooray') 
}



function countDownRecursive(n){
    if (n <= 0){
        console.log('Horray')
        return 
    }
    console.log(n)
    countDownRecursive(n - 1)
}

//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion



//regular function

function sumRange(n){
    let total = 0
    for (let i = 0; i <= n; i++){
        total = total + i
    }
    return total
}

console.log(sumRange(3))

//recursion function


function sumRangeRecursive(n){
    //return the sum of all numbers from 1 up to the number passed
    if (n <= 0){
       return n
    }

    return n + sumRangeRecursive(n - 1)
}

console.log(sumRangeRecursive(5));


//regular loop
function power(b, e){
    for (let i = e; i >= 0; i--){
        console.log(b**i)
    }

}
power(2,4)

//recursion style

function powerRecursion(){
    
}



function fib (num){
    let n1 = 0;
    let n2 = 1;
    let nextTerm = 0
    let array = []
    for (let i = 0; i <= num; i++){
       array.push(n1)
       nextTerm = n1 + n2;
       n1 = n2;
       n2 = nextTerm  
    }
    return array
}

//i would of rathered this work all in one but i get the picture. it's weird coding

console.log(fib(8))

function fibRec(num){
    if (num <=1){
        return num;
    }
    return fibRec(num - 1) + fibRec(num - 2);
}

console.log(fibRec(10))

num = 10

for (let i = 0; i < num; i++){
    console.log(fibRec(i))
}