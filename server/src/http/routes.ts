import { Router, static as static_} from 'express'
import { GetProductsController } from "./controllers/ProductController";

const appRoutes = Router()

static_( console.log(__dirname)  + '/src/images')


appRoutes.get("/products", GetProductsController)


export {appRoutes}