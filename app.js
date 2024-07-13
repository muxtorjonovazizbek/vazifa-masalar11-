// 1.Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}


// let obj = {a: 2, b: 3, c: 4}
// let result = {}

// function nums(n) {
//     Object.keys(obj).forEach(key => {
//         result[key] = obj[key] * n
//     })
// }
// nums(5)
// console.log(result);



// 2. argument sifatida berilgan string da nechta so’zda a 
// harfi ishtirok etganini aniqlaydigan function tuzing

// const findA = (str) => {
//     let arr = str.split(" ")
//     let count = 0

//     arr.forEach(val => {
//         if (val.includes("a") || val.includes("A"))  {
//             count++ 
//         }
//     })
//     return `${count} ta so'zda a harfi qatnashgan`

// }
// console.log(findA("salom nima gap"));



// 3. Quyidagi ko’rinishda object lardan tuzilgan array berildi. 
// Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin


// const books = [
//     {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false
//     },
//     {
//     title: "Dunyoning ishlari",
//     author: "O’tkir Hoshimov",
//     read: true
//     },
//     {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusufv",
//     read: true
//     },
//     ]

//     books.forEach(val => {

//         if (val.read == true) {
//             console.log(`${val.author} ning ${val.title} kitobi o'qilgan`); 
//         }else {
//             console.log(`${val.author} ning ${val.title} kitobi oqilmagan`);
//         }
//     })
   
    
    
    
    
// 4. String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
// Input: [”text”, “world”, “laptop”]
// Output: {”text”: 4, “world”: 4, “laptop”: 6}
    

// let arr = ["text", "salom", "car"]
// let result = {}
// arr.forEach(val => {
// result[val] = val.length
    
// })
// console.log(result);



// 5. Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}


// const animals = ["dog", "chicken", "cat", "dog", "chicken", "chicken","rabbit"]

// let obj = {}

// for(let i = 0; i < animals.length; i++) {
//     if (obj[animals[i]]) {
//         obj[animals[i]] += 1
//     }else {
//         obj[animals[i]] = 1
//     }

// }
// console.log(obj);



//6. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).


// let arr = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];


//     arr.sort((a,b) => a.age - b.age)

//     let young = arr[0].age
//     let old = arr[arr.length-1].age

//     console.log(`%c${young} eng yoshi`,'color:red');
//     console.log(`%c${old} eng kattasi`, 'color:#6998EE');

//     let differense = Math.abs(young-old)
//     console.log(`%c${differense} oradagi farq`, 'color: #43F700');



// 7. Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy 
// va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// Output: {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}

// let arr = [false, 1, 10, "", null, "sultonqul", 1.13, 0]

// 1-usuli

// function getTruthyFalsy(n) {
//     let truthy = []
//     let falsy = []
//     let obj = {}
//     arr.forEach(val => {
    
//         if (val) {
//            truthy.push(val)
//         }else {
//             falsy.push(val)
//         }
//         obj = {truthy,falsy}

//     })
//     return obj
// }
// let result = getTruthyFalsy(arr)
// console.log(result);


// 2-usuli

// let arr = [false, 1, 10, "", null, "sultonqul", 1.13, 0]

// function getTruthyFalsy(n) {
//     let truthy = n.filter(val => val)
//     let falsy = n.filter(val => !val)
//     return {truthy,falsy}
// }
// let result = getTruthyFalsy(arr)
// console.log(result);



// 8. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} 
// qiymat qaytaruvchi minManWord() nomli function yarating
// Input: “Men dasturlash kursida o’qiyman”
// Output: {minWord: “Men”, maxWord: “dasturlash”}


// let str = "Men dasturlash kursida o'qiyman"

// function minMaxWord(n) {
//     let arr = str.split(" ")
//     let min = arr[0]
//     let max = arr[0]

//     for(let len of arr) {
//         if (len.length < min.length) {
//             min = len
//         }
//         if (len.length > max.length) {
//             max = len
//         }
//     }

//     let minWord = min
//     let maxWord = max

//     let obj = {minWord, maxWord}
//     console.log(obj);

// }
// minMaxWord(str)