import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Param,
  Body,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('filter')
  getProductFilter() {
    return { message: 'Yo soy un filtro' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('productId') productId: number) {
    return this.productsService.findOne(+productId);
  }

  @Get()
  get(@Query('limit') limit = 100, @Query('offset') offset = 'No data') {
    return this.productsService.findAll();
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: { title: string }) {
    return this.productsService.create(payload);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() payload: any) {
    return this.productsService.update(payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
