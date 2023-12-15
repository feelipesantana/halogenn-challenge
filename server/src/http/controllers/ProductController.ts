
import z from 'zod'
import { createProductsFactory, getAllProductsFactory } from "../../use-cases/factory/ProductFactory";
import { Request, Response } from 'express';
export async function GetProductsController(request: Request, reply: Response){
  try{
    const productFactory = getAllProductsFactory();

    const getProducts = await productFactory.execute()

    return reply.status(200).send(getProducts)

  }catch(error){
    console.log(error)
  }
}

export async function CreateProductsController(request: Request, reply: Response){
  
  const schemaZodProduct = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    rate: z.number(),
    image: z.string()
  })

  const {name,description,price,rate,image} = schemaZodProduct.parse(request.body)

  console.log(name);
  try{
    const productFactory = createProductsFactory();

    const createProduct = await productFactory.execute({
      name,
      description,
      price,
      rate,
      image
    })

    return reply.status(201).send(createProduct)

  }catch(error){
    console.log(error)
  }
}