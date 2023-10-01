import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {Document} from "mongoose";
// export type UserInfoDocument = HydratedDocument<UserInfo>
export type UserInfoDocument = UserInfo & Document;
@Schema()
export class UserInfo{

    @Prop({required: true})
    time: string;

    @Prop({required: true})
    ip: string;

    @Prop({required: true})
    country: string;

    @Prop({required: true})
    region: string;

    @Prop({required: true})
    postal : string;

    @Prop({required: true})
    city: string;

    @Prop({required: true})
    org: string;
}

export const UserSchema = SchemaFactory.createForClass(UserInfo);