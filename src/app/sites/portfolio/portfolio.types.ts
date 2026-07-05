export interface WorkItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  year: string;
  shortDesc: string;
  images: string[];
  detailedDesc: string;
  materials?: string[];
  techniques?: string[];
}
