// TASK1
//Product class olacaq.Name price count gələcək.Ve ayri bir funksiya
//  olacaq ki bu funksiya total Price hesablayacaq.Və bu yaranan productlari
//  bu funksiyaya gondərdiyimdə mənə total price console cixardacaq.
// Məsələn: 2 kofe 0.50 azn , 3 çay 4azn , 2 fanta 2azn    totalPrice=2*0.50+3*4+2*2 = 17Azn consoleda görsənəcək.


// class Product {
//     constructor(ad, qiymet, say) {
//         this.name = ad
//         this.price = qiymet
//         this.count = say
//     }
//     static TotalPrice() {
//         const Totalprice =
//             `${product1.price}` * `${product1.count}` +
//             `${product2.price}` * `${product2.count}` +
//             `${product3.price}` * `${product3.count}`

//         return Totalprice + "AZN"
//     }

// }
// const product1 = new Product("kofe", 0.50, 2)
// const product2 = new Product("çay", 4, 3)
// const product3 = new Product("fanta", 2, 2)
// console.log(Product.TotalPrice(product1,product2,product3));

// ////////////////////////////////////////////////////////////////////////
// TASK2
// Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).
// Və consolda arrayın ən kiçik elementini qaytarsın


class Arr {
    constructor(arr) {
        this.arr = arr;
    }

    ArrFind() {
        if (!Array.isArray(this.arr)) {
            console.log("This is not an array");
            return;
        }

        let min = this.arr[0];
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] < min) {
                min = this.arr[i];
            }
        }
        return min;
    }
}

const arrInstance = new Arr([1, 3, 4]);
console.log(arrInstance.ArrFind());

// ////////////////////////////////////////////////////////////////////////
// TASK3
// Animal adında  class yaradın. butun heyvanlarin ortaq özəlliklərin burda tutacaqsız.
// 3.1 Default olaraq Eat() metodu yaradın.
// 3.2 Daha sonra Walk() metodu yaradın.
// 3.3 GetInfo() metodu yaradın.
// 3.4 Animal-dan törəyən Bird klass-ı yaradın.


// class Animal {
//     constructor(ad, ses, nov) {
//         this.name = ad;
//         this.voice = ses;
//         this.type = nov;
//     }
//     Eat() {
//         return this.name+"-nin cekisi";
//     }
//     Walk() {
//          return this.type ;
//     }
//     GetInfo() {
//         return `${this.name} ${this.voice} ${this.type}`;
//     }
// }

// class Bird extends Animal {
//     constructor(ad, ses, nov, ceki) {
//         super(ad, ses, nov); // Animal sinifinin constructor'ini cagir
//         this.weight = ceki;
//     }
//     birdInfo() {
//         return `${this.Eat()} ${this.weight} kq`;
//     }
// }

// const bird1 = new Bird("kivi", "cik-cik", "uca bilmiyen", "0.200");

// console.log(bird1.birdInfo());