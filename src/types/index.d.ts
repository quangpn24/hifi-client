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
type PostItem = {
  title: String;
  companyName: String;
  jobCategories: Subcategory;
  address: String;
  skill: Array<Skill>;
  image: String;
  _id: String;
  salary: Salary;
  updatedAt: Date;
  isFavorited: Boolean;
};
export type { Post, Salary, Skill, WorkLocation, Category, Subcategory, PostItem };
