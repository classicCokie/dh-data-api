import { User } from "../../database/entities/user";
import { validate } from "class-validator";
import { DefaultContext } from "koa";
import { createErrorMessage } from "../../helpers";

export const createUserInDatabase = async (
    ctx: DefaultContext,
): Promise<User | undefined> => {
    const user = new User();

    user.name = ctx.request.body.name;

    const errors = await validate(user);

    if (errors.length > 0) {
        const errorMessage = createErrorMessage(errors);
        ctx.throw(400, errorMessage);
        return;
    }

    const savedUser = await user.save();

    return savedUser;
};
