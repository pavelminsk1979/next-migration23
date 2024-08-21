import { DataSource } from 'typeorm';

export default new DataSource({
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pavel',
  database: 'typeOrmDatabase',
  type: 'postgres',
  migrations: ['migrations/*.ts'],
  entities: ['src/**/*.entity.ts'],
});
