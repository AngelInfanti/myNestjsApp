import { Injectable } from '@nestjs/common';
import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: '3ds',
      description: 'Console portatil',
      price: 100,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(payload: Product){
    this.products.map(element => {
      if(element.id === payload.id){
        return payload;
      }
      return element;
    })
  }
  delete(id: number){
    this.products = this.products.filter(item => item.id !== id);
  }
}
