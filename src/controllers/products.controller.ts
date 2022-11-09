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

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return { message: 'Yo soy un filtro' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getOne(@Res() response: Response, @Param('productId') params: string) {
    response.status(200).send({
      message: 'El producto',
      data: params,
    });
  }

  @Get()
  get(@Query('limit') limit = 100, @Query('offset') offset = 'No data') {
    return {
      message: 'Esto son los productos',
      data: {
        limit,
        offset,
      },
    };
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: { title: string }) {
    return {
      message: 'Accion para crear',
      title: payload.title,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number) {
    return {
      message: 'Producto Actualizado',
      id: id,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: number) {
    return {
      message: 'Producto Eliminado',
      id: id,
    };
  }
}
