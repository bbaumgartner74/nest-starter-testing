import { ProductRepository } from './product.repository';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductRepository],
})
export class ProductModule {}
