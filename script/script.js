// 1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.
// const arr = [1, 2, 3, 4, 5];
// let sum = 0
// function myCallback(arr,cb) {
//   for (let i = 0; i < arr.length; i++) {
//    cb(arr[i])
//   }
// }
// myCallback(arr,(numbers)=> {sum+=numbers; avrg= sum/arr.length})
// console.log(`average ${avrg}`);



// 2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
// const arr = [1, 2, 3, 4, 5];
// let cut = 0
// function myCallback(arr,cb) {
//   for (let i = 0; i < arr.length; i++) {
//    cb(arr[i]) 
//   }
// }
// myCallback(arr,(numbers)=> {numbers%2===0 ? cut+=numbers :null})
// console.log(`cut ededlerin cetek ${cut}`);


// 3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.
// const arr = [1, 2, 3, 4, 5];
// let tek = 0
// function myCallback(arr,cb) {
//   for (let i = 0; i < arr.length; i++) {
//    cb(arr[i]) 
//   }
// }
// myCallback(arr,(numbers)=> {numbers%2!==0 ? tek+=numbers :null})
// console.log(`tek ededlerin cemi - ${tek}`);



// 4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.
// const arr = [1, 2, 3, 4, 2,1,5];
// let tek = 0
// let cut = 0
// function myCallback(arr,cb) {
//   for (let i = 0; i < arr.length; i++) {
//    cb(arr[i]) 
//   }
// }
// myCallback(arr,(numbers)=> {numbers%2!==0 ? tek+=numbers :null})
// myCallback(arr,(numbers)=> {numbers%2===0 ? cut+=numbers :null})

// console.log(cut*tek);