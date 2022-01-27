function isPerfect(number) {
    let sumofdivisors = 0

    for (let i = 1; i <= number/2; i++){
        if (number % i === 0)
            sumofdivisors = i +sumofdivisors

    }
    if (number === sumofdivisors){
        return true
    }
}
for (let i = 1; i <= 1000; i++){
    if (isPerfect(i)){
        console.log(i+ " is a perfect number")
    }
}