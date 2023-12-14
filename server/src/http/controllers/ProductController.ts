
import z from 'zod'
import { getAllProductsFactory } from "../../use-cases/factory/ProductFactory";
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