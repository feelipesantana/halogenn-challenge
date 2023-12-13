import { Products } from "@prisma/client";
import { ProductRepository } from "../repositories/ProductRepository";

interface GetAllProductsRequest{
  name:string       
  description:string
  price: number
  rating:number 
}
type GetAllProductsResponse = Products
export class GetAllProducts{

  constructor(private productRepository: ProductRepository){}
  async execute(): Promise<GetAllProductsResponse[] | null>{
    const getProducts = await this.productRepository.findAll()

    if(!getProducts){
      throw new Error()
    }
    return getProducts
  }
}