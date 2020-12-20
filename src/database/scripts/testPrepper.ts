import createDbConnection from "../index";
import { User } from "../entities/user";
import { Connection } from "typeorm";

export class TestPrepper {
    connection: Connection;

    async insertUser(name: string): Promise<User> {
        const user = new User();
        user.name = name;
        return await user.save();
    }

    async prepareForTest() {
        this.connection = await createDbConnection();

        const userToDelete = await this.insertUser("Hammel");

        const userToGet = await this.insertUser("Martin");

        return {
            userToDelete,
            userToGet,
            addedUser: undefined,
        };
    }

    async cleanUpAfterTest() {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.dropTable("location_update");
        await queryRunner.dropTable("user");
        await queryRunner.executeMemoryDownSql();
        await queryRunner.release();
        return;
    }
}
