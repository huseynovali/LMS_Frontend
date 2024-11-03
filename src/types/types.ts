export type sidebarlinks = {
  name: string;
  icon: JSX.Element;
  children?: { name: string; link: string }[];
  link?: string;
};
