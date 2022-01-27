import { ProfileDetails } from "./profile-details";

export class Profile {
    constructor(
        public profileId: number,
        public name: string,
        public email: string,
        public bio: string,
        public profileImage: string,
        public profileDetails: ProfileDetails
    ){}
}
