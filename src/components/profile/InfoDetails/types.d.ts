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
