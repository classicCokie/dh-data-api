import Koa from "koa";
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

console.log("Server is listenening on 3000");
app.listen(3000);
