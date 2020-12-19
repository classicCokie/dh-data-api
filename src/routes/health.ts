import Router from "koa-router";

const checkHealth = (router: Router): void => {
    router.post("/healthcheck", async (ctx) => {
        setTimeout(() => {
            ctx.body = "all Healthy";
        }, 5000);
    });
};

export default [checkHealth];
