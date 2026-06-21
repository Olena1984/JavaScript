// Дано Shop  - клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
type ProductType = {
  name: string;
  price: number;
  quantity: number;
};

class Product {
  constructor(
    public nameProduct: string,
    public price: number,
    public quantity: number,
  ) {}
}

class Shop {
  constructor(public Product: ProductType[]) {}
  [Symbol.iterator]() {
    let index:number = 0;
    let product = this.Product
    return {
      next() {
        if (index >= product.length) {
           return {done:true}
        }else{
            let currentIndex = product[index]
            index++
           return {done:false, value:`${currentIndex.name} = ${currentIndex.price*currentIndex.quantity}`}
        }
      },
    };
  }
}
const products: ProductType[] = [
  {
    name: "milk",
    price: 37,
    quantity: 200,
  },
  {
    name: "ice-cream",
    price: 60,
    quantity: 1200,
  },
  {
    name: "cream",
    price: 50,
    quantity: 500,
  },
  {
    name: "cookie",
    price: 45,
    quantity: 2000,
  },
  {
    name: "bread",
    price: 37,
    quantity: 2500,
  },
];
const shop = new Shop(products);
for (const element of shop) {
    console.log(element);
    document.write(`${element}<br>`)
    
}
