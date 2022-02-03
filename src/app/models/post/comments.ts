import { Profile } from "../profile/profile";
import { Post } from "./post";

export interface Comments {
    commentId: number;
    comment: string;
    commentTime: Date;
    posts:Post;
    profile:Profile;
    
}
