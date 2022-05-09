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
  categories: string[];
  salary: Salary;
  description: string;
  skillTags: Skill[];
  preferedLangs: string[];
  locations: WorkLocation[];
  photoFile: any;
  postPhoto: string;
  company: Company;
}>;

type Skill = {
  _id: string;
  text: string;
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

type Salary = {
  min?: number;
  max?: number;
  unit: 'vnd' | 'usd';
  negotiable?: boolean;
};

type WorkLocation = {
  id: string;
  name?: string;
  city?: string;
  address?: string;
};

type Message = {
  userId: string;
  content: string;
  createdAt: string;
};

type User = {
  _id: string;
  uid: string;
  signInProvider: string;
  type: string;
  email: string;
  name: string;
  photoUrl: string;
  notifications: Notification[];
};

type Notification = {
  message: string;
  createdAt: Date;
  redirectUrl: string;
  _id: string;
};

type Room = {
  _id: string;
  messages: Message[];
  chatters: User[];
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

export type {
  Post,
  Salary,
  Skill,
  WorkLocation,
  Category,
  Subcategory,
  Message,
  Room,
  User,
  Notification,
};
