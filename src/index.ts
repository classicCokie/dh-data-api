import Koa from "koa";
import Router from "@koa/router";
import BodyParser from "koa-bodyparser";

const app = new Koa();
let router = new Router();

router.get("/hello-world", async (ctx: Koa.BaseContext) => {
    ctx.body = "Toll!";
});

// Handle errors
app.on("error", (err) => {
    console.error("server error", err);
});

app.use(BodyParser()).use(router.routes()).use(router.allowedMethods());

console.log("Server is listenening on 3000");
app.listen(3000);
