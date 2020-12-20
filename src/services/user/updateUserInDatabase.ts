import { User } from "../../database/entities/user";
import { validate } from "class-validator";
import { DefaultContext } from "koa";
import { createErrorMessage } from "../../helpers";

export const updateUserInDatabase = async (ctx: DefaultContext) => {
    const { userId } = ctx.request.body;

    if (!userId) {
        ctx.throw(500, "No userId provided");
        return;
    }

    const user = await User.findOne({ id: userId });

    if (!user) {
        ctx.throw(404, "User not Found");
        return;
    }

    user.name = ctx.request.body.name;

    const errors = await validate(user);
    if (errors.length > 0) {
        const errorMessage = createErrorMessage(errors);
        ctx.throw(400, errorMessage);
    } else {
        await user.save();
    }

    return user;
};
