export interface WorkItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  year: string;
  shortDesc: string;
  images: string[];
  details?: string[];
  materials?: string[];
  techniques?: string[];
}
