import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [
    {
      "id": 1,
      "title": "iPhone 9",
      "price": 549,
      "brand": "Apple",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "isInCart":false
    },
    {
      "id": 2,
      "title": "iPhone X",
      "price": 899,
      "brand": "Apple",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "isInCart": false
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "price": 1249,
      "brand": "Samsung",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "isInCart": false
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "price": 280,
      "brand": "OPPO",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "isInCart": false
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "price": 499,
      "brand": "Huawei",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "isInCart": false
    }
  ];

  cartProducts: any[] = [];

  totalPrice: number = 0;


  calculateTotal() {
    this.totalPrice = this.cartProducts.reduce((total, product) => {
      return total + (product.price * product.count);
    }, 0);
  }



  addToCart(product: any,index:number) {
    let singleCountProduct = { ...product, "count": 1 };
    this.cartProducts.push(singleCountProduct);
    this.products[index].isInCart = true;
    this.calculateTotal();
    console.log(this.cartProducts)
  }

  incrementCount(id: number) {
    let index = this.cartProducts.findIndex((product) => {
      return product.id === id;
    });
    this.cartProducts[index].count++;
    this.calculateTotal();
  }

  decrementCount(id: number) {
    let index = this.cartProducts.findIndex((product) => {
      return product.id === id;
    });
    this.cartProducts[index].count--;
    this.calculateTotal();
  }

}
