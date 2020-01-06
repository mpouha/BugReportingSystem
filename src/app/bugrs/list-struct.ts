import { bugComment } from "./comment-struct";

export interface ListStruct {
  id: string;
  title: string;
  priority: string;
  reporter: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  comments: bugComment[];
}

