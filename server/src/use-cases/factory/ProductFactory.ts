import { PrismaProductRepository } from "../../repositories/prisma/PrismaProductRepository";
import { CreateProducts } from "../create-products";
import { GetAllProducts } from "../get-all-products";

export function getAllProductsFactory(){
  const prismaProductRepository = new PrismaProductRepository()
  const getAllProducts = new GetAllProducts(prismaProductRepository)
  return getAllProducts
}

export function createProductsFactory(){
  const prismaProductRepository = new PrismaProductRepository()
  const createProducts = new CreateProducts(prismaProductRepository)
  return createProducts
}