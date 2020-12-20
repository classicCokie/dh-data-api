import { User } from "../../database/entities/user";
import { DefaultContext } from "koa";

export const getAllUsersInDatabase = async (ctx: DefaultContext) => {
    const users = await User.find();

    if (!users) {
        ctx.throw(404, "No Users found");
        return;
    }

    return users;
};
