type Post = Partial<{
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
