import { FastifyReply, FastifyRequest } from "fastify";

import z from 'zod'
import { getAllProductsFactory } from "../../use-cases/factory/ProductFactory";
export async function GetProductsController(request: FastifyRequest, reply: FastifyReply){
  try{
    const productFactory = getAllProductsFactory();

    const getProducts = await productFactory.execute()

    return reply.status(200).send(getProducts)

  }catch(error){
    console.log(error)
  }
}