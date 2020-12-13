import { User } from "../../database/entities/user";
import { validate } from "class-validator";
import { DefaultContext } from "koa";
import { createErrorMessage } from "../../helpers";

export const createUserInDatabase = async (ctx: DefaultContext) => {
    const user = new User();

    user.name = ctx.request.body.name;

    const errors = await validate(user);
    console.log(errors);
    if (errors.length > 0) {
        const errorMessage = createErrorMessage(errors);
        ctx.throw(400, errorMessage);
    } else {
        await user.save();
    }

    return user;
};
