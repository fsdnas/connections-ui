import { Profile } from "../profile/profile";
import { Post } from "./post";

export interface Like {
    likeId:number;
    likeTime:Date;
    profile:Profile;
    post:Post;
}
