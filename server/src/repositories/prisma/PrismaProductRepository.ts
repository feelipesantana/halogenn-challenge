import { Prisma, Products } from "@prisma/client";
import { ProductRepository } from "../ProductRepository";
import { prisma } from "../../services/prisma";

export class PrismaProductRepository implements ProductRepository{
  async create(data: Prisma.ProductsCreateInput): Promise<Products> {
    const createProduct = await prisma.products.create({
      data:{
        name:data.name,
        description:data.description,
        price:data.price,
        rating:data.rating
      }
    })

    return createProduct;
  } 
  async findAll(): Promise<Products[] | null> {
    const findProducts = await  prisma.products.findMany()
    return findProducts
  }
}