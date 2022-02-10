import { ProfileDetails } from './profile-details';

export interface Profile {
  profileId: number;
  name: string;
  email: string;
  bio: string;
  profileImage: string;
  profileDetails: ProfileDetails;
  password: string;
}
