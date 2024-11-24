export type sidebarlinks = {
  name: string;
  idName: string;
  icon: JSX.Element;
  children?: { name: string; link: string }[];
  link?: string;
};

export type studentCourseData = {
  id: number;
  name: string;
  teacher: string | null;
  days: string;
  time: string;
};

export type student = {
  id: number;
  name: string;
  surname: string;
  fatherName: string;
  email: string;
  phone: string;
  address: string;
  image: null;
  joinDate: string;
  point: number;
  university: string;
  faculty: string;
  admissionDate: string;
};

export type teacher = {
  id: number;
  name: string;
  surname: string;
  fatherName: string;
  email: string;
  phone: string;
  address: string;
  image: null;
  filialID: number;
  joinDate: string;
};

export type MonthProfitData = {
  month: string;
  filials: {
    [key: string]: number;
  }[];
};

export type admin = {
  id: number;
  name: string;
  surname: string;
  fatherName: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
};
