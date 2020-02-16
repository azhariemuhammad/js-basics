// Buatlah sebuah function countTheGap yang dapat menerima data number sebagai parameternya. Function tersebut harus mengumbah parameter number menjadi angka binary. Kemudian, hitung gap-nya(gap yang dimaksud adalah angka 0 yang berada diatara dua angka 1). Setelah itu, return hasil perhitungan gap yang tertinggi.

// Contoh 1:
// Input: 9
// Output: 2

// Kenapa ?
// Angka binary dari 9 adalah 1001. Di sini terdapat dua angka 0 diantara dua angka 1 (gap). Maka output adalah 2.

// Contoh 2:
// Input: 529
// Output: 4

// Contoh ?
//   The binary number of 529 is 1000010001. There are two gap, one is 4 and one is 3. The highest gap of them all is 4, therefore the output is 4.
// Angka binary dari 529 adalah 1000010001. Terdapat dua gap, yaitu 4 dan 3. Gap tertinggi adalah 4, maka outputnya 4.

// Contoh 3:
// Input: 20
// Output: 1

// Kenapa ?
//   The binary number of 20 is 10100. There are only one gap, and it is 1. Therefore, the output is 1.
// Angka biary dari 20 adalah 10100. Di sini terdapat satu gap, yaitu 1. Maka dari itu, outputnya 1.

// Contoh 4:
// Input: 15
// Output: 0

// Kenapa ?
//   Angka binary of 15 is 1111. Disini terdapat 0 gap, maka dari itu outputnya 0.

// ----------------------
// CATATAN:
// Untuk mengubah data number menjadi angka binary, maka Anda bisa menggunakan method toString(2)
// Contoh:

// var number = 9
// var numberToBinary = number.toString(2)

// console.log(numberToBinary)// output: 1001

// ------------------------

function countTheGap(num){
  
}

console.log(countTheGap(9)) // Output: 2
console.log(countTheGap(529)) // Output: 4
console.log(countTheGap(20)) // Output: 1
console.log(countTheGap(15)) // Output: 0