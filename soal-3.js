// diketahui jumlah koin sen pecahan [25,10,5,1] 
// buatlah sebuah function yang akan mengembalikan sebuah number 
// berapa jumlah koin yang akan didapatkan jika kita ingin mendapatkan jumlah uang sen tertentu
// contoh untuk mendapatkan 31 sen maka dibutuhkan 3 koin yaitu 25 sen,5 sen,dan 1 sen

function cekKoin(koin) {
    var jumlah = ""
    var sisa = ""
    if (koin % 25 < koin) {
        jumlah += (koin / 25)
        sisa = koin % 25
        koin = sisa
    }
    if (koin % 10 < koin) {
        jumlah += (koin / 10)
        sisa = koin % 10
        koin = sisa
    }
    if (koin % 5 < koin) {
        jumlah += (koin / 5)
        koin = sisa
    }

    sum += (koin / 1)
    return sum
}

console.log(cekKoin(49))//7
console.log(cekKoin(31))//3
console.log(cekKoin(50))//2


// var tahun = Math.floor(input / 360)
// var sisaTahun = input % 360
// var bulan = Math.floor(sisaTahun / 30)
// var sisaBulan = bulan % 30
// var minggu = Math.floor(sisaBulan / 7)
// var hari = sisaBulan % 7