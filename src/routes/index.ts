import Router from "koa-router";
import allUserRoutes from "./user";
import allLocationUpdateRoutes from "./locationUpdate";

const allRoutes = [...allUserRoutes, ...allLocationUpdateRoutes];

const applyRoutes = (router: Router): Router => {
    allRoutes.forEach((route) => route(router));
    return router;
};

export default applyRoutes;
