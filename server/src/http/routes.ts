import { Router, static as static_} from 'express'
import { CreateProductsController, GetProductsController } from "./controllers/ProductController";

const appRoutes = Router()

static_( console.log(__dirname)  + '/src/images')


appRoutes.get("/products", GetProductsController)
appRoutes.post("/products", CreateProductsController)


export {appRoutes}