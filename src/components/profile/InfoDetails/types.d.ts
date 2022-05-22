type WorkExperience = {
  _id: string;
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  isPresent: boolean;
  notes: string;
};
type Education = {
  _id: string;
  school: string;
  degree: string;
  fieldStudy: string;
  startDate: Date;
  endDate?: Date;
  isPresent: boolean;
  notes: string;
};
type Volunteering = {
  _id: string;
  activityName: string;
  role: string;
  startDate: Date;
  endDate: Date;
  isPresent: boolean;
  notes: string;
};
type JobInterest = {
  _id: string;
  fields: {
    job: string;
    role: string;
  }[];
  typesOfOpportunity: [];
  currencyCode: string;
  workLocation: string;
  salaryExpectation: number;
  willingToWorkRemotely: boolean;
};
type InterestField = {
  job: string;
  role: string;
};
