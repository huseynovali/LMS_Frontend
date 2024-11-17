export type sidebarlinks = {
  name: string;
  idName: string;
  icon: JSX.Element;
  children?: { name: string; link: string }[];
  link?: string;
};
