import { apiInstance } from "shared/api/base";
import { PostsResponse } from "shared/api/dto/posts";

export const getPosts = async () => {
  const response = await apiInstance.get("/api/posts");

  return response.data as PostsResponse;
};

export const createPost = async ({
  title,
  content,
  price,
}: {
  title: string;
  content: string;
  price: any;
}) => {
  price = parseInt(price, 10);
  const response = await apiInstance.post("/api/posts", {
    title,
    content,
    price,
    username: "romanok",
  });

  return response.data;
};
