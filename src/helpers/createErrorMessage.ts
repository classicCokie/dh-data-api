const flattenErrorMessages = (contraints: any) => {
    return Object.keys(contraints).reduce((result: string, key: string) => {
        result += contraints[key] + "\n";
        return result;
    }, "");
};

// TODO: make this function a bit cleaner and have it return a nice string
export const createErrorMessage = (errors: any): string => {
    return errors.reduce((result: string, item: any) => {
        result += flattenErrorMessages(item.constraints);
        return result;
    }, "");
};
