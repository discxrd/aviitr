import { apiInstance, storageInstance } from "shared/api/base";
import { PostsResponse } from "shared/api/dto/posts";

export const getPosts = async () => {
  const response = await apiInstance.get("/api/posts");

  return response.data as PostsResponse;
};

export const uploadImage = async ({ file }: { file: any }) => {
  const response = await storageInstance.post("/files/" + file.name, file, {
    headers: {
      "Content-Type": "image/" + file.type.split("/")[1],
      "Content-Length": file.size,
      "Content-Disposition": "attachment; filename=" + file.name,
    },
  });

  return response.data;
};

export const createPost = async ({
  title,
  content,
  price,
  files,
}: {
  title: string;
  content: string;
  price: any;
  files: any;
}) => {
  price = parseInt(price, 10);

  for (let i = 0; i < files.length; i++) {}

  const response = await apiInstance.post("/api/posts", {
    title,
    content,
    price,
    username: "romanok",
  });

  return response.data;
};
