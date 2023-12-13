import Fastify from "fastify";
import { appRoutes } from "./http/routes";


const app = Fastify()

app.register(appRoutes)

app.listen({
  host: "0.0.0.0",
  port: 3333
}).then(() => {
  console.log("🚀 Server is Running on Port: 3333")
})