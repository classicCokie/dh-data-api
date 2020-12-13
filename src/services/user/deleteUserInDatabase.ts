import { User } from "../../database/entities/user";
import { DefaultContext } from "koa";

export const deleteUserInDatabase = async (ctx: DefaultContext) => {
    if (!ctx.request.body.userId) {
        ctx.throw(400, "No User Id Provided");
        return;
    }

    const selectedUser = await User.findOne({ id: ctx.request.body.userId });

    if (!selectedUser) {
        ctx.throw(400, "No User found!");
        return;
    }

    await selectedUser.remove();

    return "User was deleted!";
};
