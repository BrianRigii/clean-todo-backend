import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


export const dbConfig : PostgresConnectionOptions  = {
    type: "postgres",
    host: process.env.HOST ||"localhost",
    port: parseInt(<string>process.env.PGPORT ?? "3306", 10),
    username: process.env.USER || 'postgress',
    password: process.env.PASSWORD || '123456', 
    database: process.env.DATABASE||'todo',
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ["dist/db/migrations/*.js"],
    synchronize: true,


}

 const dataSource = new DataSource(dbConfig);

export default dataSource;