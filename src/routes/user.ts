import Router from "koa-router";
import {
    createUserInDatabase,
    deleteUserInDatabase,
    updateUserInDatabase,
    getUserInDatabase,
    getAllUsersInDatabase,
} from "../services/user";

const getUser = (router: Router): void => {
    router.get(
        "/user",
        async (ctx) => (ctx.body = await getUserInDatabase(ctx)),
    );
};

const getAllUsers = (router: Router): void => {
    router.get(
        "/users",
        async (ctx) => (ctx.body = await getAllUsersInDatabase(ctx)),
    );
};

const createUser = (router: Router): void => {
    router.post(
        "/user",
        async (ctx) => (ctx.body = await createUserInDatabase(ctx)),
    );
};

const updateUser = (router: Router): void => {
    router.put(
        "/user",
        async (ctx) => (ctx.body = await updateUserInDatabase(ctx)),
    );
};

const deleteUser = (router: Router): void => {
    router.delete(
        "/user",
        async (ctx) => (ctx.body = await deleteUserInDatabase(ctx)),
    );
};

export default [createUser, deleteUser, getUser, updateUser, getAllUsers];
