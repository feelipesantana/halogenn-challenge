import { Prisma, Product } from "@prisma/client";
import { ProductRepository } from "../ProductRepository";
import { prisma } from "../../services/prisma";

export class PrismaProductRepository implements ProductRepository{
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const createProduct = await prisma.product.create({
      data:{
        name:data.name,
        description:data.description,
        price:data.price,
        rate:data.rate,
        image: data.image
      }
    })

    return createProduct;
  } 
  async findAll(): Promise<Product[] | null> {
    const findProduct = await  prisma.product.findMany()
    return findProduct
  }
}