import { comment } from "./comment";

export interface ListStruct {
  id: string;
  title: string;
  priority: string;
  reporter: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  comments: comment[];
}

