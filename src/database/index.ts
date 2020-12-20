import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import allEntities from "./entities";

const createDbConnection = (): Promise<Connection> =>
    createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "dave",
        password: "kennIck123!",
        database: "test",
        entities: allEntities,
        synchronize: true,
        logging: false,
    });

export default createDbConnection;
