import { Prisma, Products } from "@prisma/client"

export interface ProductRepository{
  create(data: Prisma.ProductsCreateInput): Promise<Products>
  findAll(): Promise<Products[] | null>
}