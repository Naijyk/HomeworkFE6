// // Задание 1

// let user = {
//     name: "John",
//     age: 30
// };

// console.log(user);
// console.log(user.age);

// Задание 2, 3, 4

// let product = {
//     name: 'productname',
//     price: 'productprice'
// }

// product.product_quantity = 'productquantity';
// product.product_quality = 'productquality';
// delete product.product_quality;

// console.log(product);

// Задание 5

// let menu = {
//     width: 200,
//     height: 300,
//     title: "my menu"
// }

// for(let key in menu){
//     if(typeof menu[key] === 'number'){
//         menu[key] *= 2;
//     }
// }

// console.log(menu);

// Задание 6

// function comparenumbers(a, b){
//     if(a>b){
//         return 1;
//     }
//     else if(a<b){
//         return -1;
//     }
//     else{
//         return 0
//     }
// }

function checknumbers(a, b){
    if(a % 2 === 0 && b % 2 === 0){
        return a * b;
    }
    else if(a % 2 !== 0 && b % 2 !== 0){
        return a + b;
    }
    else if(a % 2 !== 0){
        return a;
    }
    else{
        return b;
    }
}

console.log(checknumbers(3, 2));