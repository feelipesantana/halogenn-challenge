import { PrismaProductRepository } from "../../repositories/prisma/PrismaProductRepository";
import { GetAllProducts } from "../get-all-products";

export function getAllProductsFactory(){
  const prismaProductRepository = new PrismaProductRepository()
  const getAllProducts = new GetAllProducts(prismaProductRepository)
  return getAllProducts
}