import { Certifications } from "./certifications";
import { OpenTo } from "./open-to";
import { Skills } from "./skills";

export class ProfileDetails {
    constructor(
        public detailsId: number,
        public openTo: OpenTo,
        public qualification: string,
        public skills: Set<Skills>,
        public experience: number,
        public certifications: Set<Certifications>
    ){}
}
