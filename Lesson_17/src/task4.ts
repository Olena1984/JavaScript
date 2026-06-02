/* 
4.	Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
 */

class ManufacturerCompany {
  constructor(
    public name: string,
    public registrationNumber: number,
  ) {}
  toString() {
    return `${this.name}, ${this.registrationNumber}`;
  }
}

class Product {
  constructor(
    public productName: string,
    public unit: string,
    public quantity: number,
    public company: ManufacturerCompany,
  ) {}
  toString() {
    return `${this.productName}, ${this.unit}, ${this.quantity}, ${this.company}`;
  }
}

class StorageProducts {
  constructor(public productsList: Product[]) {}

  // реєстрацію товарів
  productRegistration(newProduct: Product) {
    return this.productsList.push(newProduct);
  }
  // відвантаження товарів,
  shippingProducts(name: string, value: number) {
    const findProduct = this.productsList.find(
      (product) => product.productName.toLowerCase() === name.toLowerCase(),
    );
    if (findProduct && findProduct.quantity > 0) {
      findProduct.quantity -= value;
    }
    return findProduct;
  }
  // фільтрація за назвою товару,
  filterProductByName(name: string) {
    return this.productsList.filter(
      (product) => product.productName.toLowerCase() === name.toLowerCase(),
    );
  }
  // фільтрація за назвою фірми
  filterProductByCompany(name: string) {
    return this.productsList.filter((product) => product.company.name.toLowerCase() === name.toLowerCase());
  }
}

const products: Product[] = [
  new Product(
    "Golden chestnuts",
    "шт",
    5000,
    new ManufacturerCompany("Svitoch", 38215400),
  ),
  new Product(
    "Chamomile",
    "шт",
    3000,
    new ManufacturerCompany("Roshen", 34545600),
  ),
  new Product(
    "Starlight",
    "шт",
    13000,
    new ManufacturerCompany("Svitoch", 38215400),
  ),
  new Product(
    "Crazy bee",
    "шт",
    25000,
    new ManufacturerCompany("Roshen", 34545600),
  ),
  new Product(
    "Chocolate",
    "шт",
    1000,
    new ManufacturerCompany("Roshen", 12345678),
  ),
];

const storage = new StorageProducts(products);

console.log(storage.shippingProducts("Golden chestnuts", 500));
console.log(storage.productsList);
console.log(storage.filterProductByName("Crazy bee"));
console.log(storage.filterProductByCompany("Svitoch"));

