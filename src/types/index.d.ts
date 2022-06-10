type User = {
  _id: string;
  uid: string;
  signInProvider: string;
  type: string;
  email: string;
  name: string;
  photoUrl: string;
  birthDate: Date;
  isVerified: boolean;
  phoneNumber: string;
  address: string;
  age: number;
  gender: Gender;
  nationality: string;
  about: string;
  skills: Skill[];
  resume: UploadFile | null;
  socialNetwork: {
    facebook: string;
    linkedIn: string;
    github: string;
    twitter: string;
  };
  candidateStatus:
    | 'I_AM_LOOKING_FOR_JOB'
    | 'OPEN_FOR_OPPORTUNITIES'
    | 'I_AM_NOT_INTERESTED_IN_JOB'
    | string;
  notifications: Noti[];
};

type Gender = 'MALE' | 'FEMALE';

type Company = {
  _id: string;
  email: string;
  name: string;
  phoneNumber: string;
  industries: Subcategory[];
  address: string;
  locations: WorkLocation[];
  size: string;
  contactName: string;
  summary: string;
  logo: string;
  accountStatus: 'pending' | 'rejected' | 'fullfilled';
};

type Post = Partial<{
  _id: string;
  title: string;
  jobType: string;
  jobCategory: Subcategory;
  salary: Salary;
  description: any;
  skillTags: Skill[];
  preferedLangs: string[];
  locations: WorkLocation[];
  photoFile: any;
  postPhoto: string;
  company: Company;
  workplaceType: 'remote' | 'on-site' | 'hybrid';
  experienceLevel: 'Internship' | 'Entry level' | 'Associate' | 'Mid-Senior level' | 'Director';
  updatedAt: Date;
  createdAt: Date;
  isFavorited: Boolean;
  application: Application;
  applicationDeadline: Date;
}>;

type Skill = {
  _id: string;
  text: string;
};

type Category = {
  _id: string;
  name: string;
  jobs: number;
  subcategories: Subcategory[];
};

type Subcategory = {
  _id: string;
  name: string;
};

type Salary = {
  min?: number;
  max?: number;
  unit: 'vnd' | 'usd';
  negotiable?: boolean;
};

type WorkLocation = {
  _id: string;
  officeName?: string;
  city?: string;
  address?: string;
};

type Message = {
  userId: string;
  content: string;
  createdAt: string;
};

type Noti = {
  message: string;
  createdAt: Date;
  redirectUrl: string;
  _id: string;
  isRead: boolean;
};

type Room = {
  _id: string;
  messages: Message[];
  chatters: Chatter[];
};

type Chatter = {
  chatterId: string;
  name: string;
  avatar: string;
  type: string;
};

type Award = {
  _id: string;
  userId: string;
  title: string;
  achievement: string;
  year: number;
  notes: string;
};

type Category = {
  _id: string;
  name: string;
  subcategories: Subcategory[];
};

type Subcategory = {
  _id: string;
  name: string;
};

type UploadFile = {
  fileName: string;
  url: string;
};

type Application = {
  id: string;
  resume: UploadFile;
  phoneNumber: string;
  coverLetter: string;
  status: string;
  user: User;
  post: Post;
  createAt: Date;
  updatedAt: Date;
};

type ProfileOverviewContextType = {
  profileOverview: ProfileOverviewType;
  changeOverview: (data: Partial<ProfileOverviewType>) => void;
  loading: boolean;
};

type ProfileOverviewType = {
  basicInfo: boolean | null;
  about: boolean | null;
  education: boolean | null;
  experience: boolean | null;
  skills: boolean | null;
  interests: boolean | null;
  volunteerings: boolean | null;
  awards: boolean | null;
  resume: boolean | null;
};
