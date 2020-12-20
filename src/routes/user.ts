import Router from "koa-router";
import { createUserInDatabase, deleteUserInDatabase } from "../services/user";

const createUser = (router: Router): void => {
    router.post("/user", async (ctx) => {
        const newUser = await createUserInDatabase(ctx);
        ctx.body = JSON.stringify(newUser);
    });
};

const deleteUser = (router: Router): void => {
    router.delete("/user", async (ctx) => {
        ctx.body = await deleteUserInDatabase(ctx);
    });
};

export default [createUser, deleteUser];
