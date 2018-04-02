import { User } from "./user";
import { Comment } from "./comment";

export interface Article {
  _id?: string,
  title: string,
  content: string,
  author?: User,
  comment? : Comment[]
}
