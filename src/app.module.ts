import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: DB_HOST,
      port: DB_PORT ? parseInt(DB_PORT) : 5432,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
