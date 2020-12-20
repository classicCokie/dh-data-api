import Koa from "koa";
import Router from "@koa/router";
import BodyParser from "koa-bodyparser";
import connectToDatabase from "./database";
import applyRoutes from "./routes";
import { koaSwagger } from "koa2-swagger-ui";
import * as spec from "../docs/api/routes.json";

connectToDatabase();

const app = new Koa();
let router = applyRoutes(new Router());

router.get("/hello-world", async (ctx: Koa.BaseContext) => {
    ctx.body = "Toll!";
});

router.get(
    "/docs",
    koaSwagger({ routePrefix: false, swaggerOptions: { spec } }),
);

koaSwagger;

// Handle errors
app.on("error", (err) => {
    console.error("server error", err);
});

app.use(BodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000);

export default app;
