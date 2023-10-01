import {Body, Controller, Post} from '@nestjs/common';
import {UserInfoService} from "./user-info.service";

@Controller('user-info')
export class UserInfoController {
    constructor(private userInfoService: UserInfoService) {}

    @Post("save")
    async saveUserInfo(@Body() userData){
        // console.log("userData is", userData);
        const res = await this.userInfoService.saveUserInfo(userData);
        return res;
    }
}
