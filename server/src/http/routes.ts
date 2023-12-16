import { Router, static as static_} from 'express'
import { CreateProductsController, GetProductsController } from "./controllers/ProductController";

const appRoutes = Router()

appRoutes.get("/products", GetProductsController)
appRoutes.post("/products", CreateProductsController)


export {appRoutes}