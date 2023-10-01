import {Model} from "mongoose";
import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {UserInfo, UserInfoDocument} from "./schemas/userInfo.schema";

@Injectable()
export class UserInfoService {
    constructor(@InjectModel(UserInfo.name) private userInfo: Model<UserInfoDocument>) {}

    async saveUserInfo(userInfo){
        console.log("info", userInfo);
        const userInfoNew = new this.userInfo({
            time: userInfo.date,
            ip: userInfo.ip,
            country: userInfo.country,
            region: userInfo.region,
            postal: userInfo.postal,
            city: userInfo.city,
            org: userInfo.org,
        });
        const res = await userInfoNew.save();
        console.log("res", res);
        return res;
    }
}
