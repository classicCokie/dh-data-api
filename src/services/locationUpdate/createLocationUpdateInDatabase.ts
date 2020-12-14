import { LocationUpdate } from "../../database/entities/locationUpdate";
import { validate } from "class-validator";
import { DefaultContext } from "koa";
import { createErrorMessage } from "../../helpers";

export const createLocationUpdateInDatabase = async (ctx: DefaultContext) => {
    const locationUpdate = new LocationUpdate();

    locationUpdate.userId = ctx.request.body.userId;
    locationUpdate.long = ctx.request.body.long;
    locationUpdate.lat = ctx.request.body.lat;
    locationUpdate.radius = ctx.request.body.radius;

    const errors = await validate(locationUpdate);
    if (errors.length > 0) {
        const errorMessage = createErrorMessage(errors);
        ctx.throw(400, errorMessage);
    } else {
        await locationUpdate.save();
    }

    return locationUpdate;
};
