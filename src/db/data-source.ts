import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


export const dbConfig : PostgresConnectionOptions  = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "todo",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ["dist/db/migrations/*.js"],


}

 const dataSource = new DataSource(dbConfig);

export default dataSource;