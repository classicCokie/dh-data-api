// TODO: make this function a bit cleaner and have it return a nice string
export const createErrorMessage = (errors: any): string => {
    return errors.reduce((result: string, item: any) => {
        result += JSON.stringify(item.constraints);
        console.log(item.constraints);
        return result;
    }, "");
};
