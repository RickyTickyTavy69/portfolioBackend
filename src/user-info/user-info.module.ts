import { Module } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { UserInfoController } from './user-info.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserInfo, UserSchema} from "./schemas/userInfo.schema";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [MongooseModule.forFeature([{name: UserInfo.name, schema: UserSchema}]), ConfigModule],
  providers: [UserInfoService],
  controllers: [UserInfoController]
})
export class UserInfoModule {}
