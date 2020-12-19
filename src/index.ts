import Koa from "koa";
import Router from "@koa/router";
import BodyParser from "koa-bodyparser";
import connectToDatabase from "./database";
import applyRoutes from "./routes";

connectToDatabase();

const app = new Koa();
let router = applyRoutes(new Router());

router.get("/hello-world", async (ctx: Koa.BaseContext) => {
    ctx.body = "Toll!";
});

// Handle errors
app.on("error", (err) => {
    console.error("server error", err);
});

app.use(BodyParser()).use(router.routes()).use(router.allowedMethods());

// app.listen(3000);

export default app;
