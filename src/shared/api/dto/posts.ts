import { Post } from "entities/post";

export type PostsResponse = {
  code: number;
  data: Post[];
  msg: string;
};
