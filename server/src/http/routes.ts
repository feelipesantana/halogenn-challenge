import { FastifyInstance } from "fastify";
import { GetProductsController } from "./controllers/ProductController";

export async function appRoutes(app:FastifyInstance){
  app.get("/products", GetProductsController)
}