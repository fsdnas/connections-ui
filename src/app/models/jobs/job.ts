import { Company } from './company';
import { JobDetails } from './job-details';

export interface Job {
  jobId: number;
  title: string;
  employmentType: string;
  description: string;
  location: string;
  company: Company;
  jobDetails: JobDetails;
}
