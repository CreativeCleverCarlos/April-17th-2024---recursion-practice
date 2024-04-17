

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
