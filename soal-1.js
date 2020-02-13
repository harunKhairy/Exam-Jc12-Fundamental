// buatlah sebuah function factorial dimana jika inputnya 3 maka (3x2x1) dan hasilnya 6.
const Faktorial = (num) => {
    if (num === 0 || num === 1)
        return 1
    for ( i=num - 1; i>=1; i--) {
        num *= i
    }
    return num
}

console.log(Faktorial(5))//120
console.log(Faktorial(4))//24
console.log(Faktorial(10))//3628800
