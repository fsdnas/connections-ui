import { Profile } from "../profile/profile";
import { Like } from "./like";

export interface Post {
    postId:number;
    title:string;
    description:string;
    topic:string;
    likes:Set<Like>;
    comments:Set<Comment>;
    profile:Profile;
}
