import { Injectable } from '@nestjs/common';
import { type } from 'os';
import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: '3ds',
      description: 'Console portatil',
      price: 100,
    },
    {
      id: 2,
      name: 'wii',
      description: 'Consola de sobremesa',
      price: 150,
    },
  ];
  private counterId = this.products.length;
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(payload: Product) {
    if(!payload.id){
      return {message: "Not id"};
    }
    const product = this.findOne(payload.id);
    if (product) {
      this.products = this.products.map((element) => {
        if (element.id === payload.id) {
          return {...element, ...payload};
        }
        return element;
      });
      return this.products.filter(product => product.id == payload.id)[0];
    }
    return {message: "Not product"};
  }
  delete(id: number) {
    const product = this.findOne(id);
    if (product) {
      this.products = this.products.filter((item) => item.id !== id);
      return true;
    }
    return null;
  }
}
