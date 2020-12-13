import Router from "koa-router";
import allUserRoutes from "./user";

const allRoutes = [...allUserRoutes];

const applyRoutes = (router: Router): Router => {
    allRoutes.forEach((route) => route(router));
    return router;
};

export default applyRoutes;
