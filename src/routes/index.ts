import Router from "koa-router";
import allUserRoutes from "./user";
import allLocationUpdateRoutes from "./locationUpdate";
import healthRouter from "./health";

const allRoutes = [
    ...allUserRoutes,
    ...allLocationUpdateRoutes,
    ...healthRouter,
];

const applyRoutes = (router: Router): Router => {
    allRoutes.forEach((route) => route(router));
    return router;
};

export default applyRoutes;
