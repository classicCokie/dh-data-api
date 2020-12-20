import { User } from "database/entities/user";

export interface ITestProps {
    userToDelete: User;
    userToGet: User;
    userToUpdate: User;
    addedUser: User | undefined;
}
