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
