import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInfoModule } from './user-info/user-info.module';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      UserInfoModule,
      MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => ({
              uri: config.get<string>('MONGO_URI') || process.env.MONGO_URI,
          })
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
