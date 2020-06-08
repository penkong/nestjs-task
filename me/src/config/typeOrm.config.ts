import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  //   port: 9187,
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  // become table in dbs
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
