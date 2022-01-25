import { Industrytype } from './industrytype';
import { Job } from './job';

export interface Company {
  companyId: number;
  companyName: string;
  logo: string;
  headQuarters: string;
  industyType: Industrytype;
  foundedYear: number;
  jobs: Set<Job>;
}
