import "reflect-metadata";
import { createConnection } from "typeorm";
import Entities from "./entities";

export default () => {
    createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "dave",
        password: "kennIck123!",
        database: "test",
        entities: Entities,
        synchronize: true,
        logging: false,
    })
        .then((connection) => {
            // here you can start to work with your entities
            console.log("Acctually Fucking Connected");
        })
        .catch((error) => console.log(error));
};
