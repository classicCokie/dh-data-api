import Router from "koa-router";

const createUser = (router: Router): void => {
    console.log("Creates a user");

    router.get("/user/create", async (ctx) => {
        ctx.body = "Created User";
    });
};

const deleteUser = (router: Router): void => {
    console.log("Deletes a user");

    router.delete("/user/delete", async (ctx) => {
        ctx.body = "Deleted User";
    });
};

export default [createUser, deleteUser];
