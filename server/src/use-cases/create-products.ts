import { Product } from "@prisma/client";
import { ProductRepository } from "../repositories/ProductRepository";

interface CreateProductsRequest{
  name:string,
  description:string,
  price:number,
  rate:number,
  image:string
}

type  CreateProductsResponse = Product
export class CreateProducts{
  constructor(private productRepository: ProductRepository){}

  async execute({name,description,price,rate,image}:CreateProductsRequest): Promise<CreateProductsResponse>{
    const createProduct = await this.productRepository.create({
      name,
      description,
      price,
      rate,
      image
    })

    if(!createProduct){
      throw new Error()
    }

    return createProduct
  }
}