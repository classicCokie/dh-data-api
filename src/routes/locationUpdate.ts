import Router from "koa-router";
import { createLocationUpdateInDatabase } from "../services/locationUpdate";

const createLocationUpdate = (router: Router): void => {
    router.post("/locationUpdate/create", async (ctx) => {
        const newLocationUpdate = await createLocationUpdateInDatabase(ctx);
        ctx.body = JSON.stringify(newLocationUpdate);
    });
};

export default [createLocationUpdate];
