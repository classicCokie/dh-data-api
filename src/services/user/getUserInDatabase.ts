import { User } from "../../database/entities/user";
import { DefaultContext } from "koa";

export const getUserInDatabase = async (ctx: DefaultContext) => {
    const { userId } = ctx.request.body;

    if (!userId) {
        ctx.throw(400, "No UserId provided");
        return;
    }

    const user = await User.findOne({ id: userId });

    if (!user) {
        ctx.throw(404, "User not found");
        return;
    }

    return user;
};
