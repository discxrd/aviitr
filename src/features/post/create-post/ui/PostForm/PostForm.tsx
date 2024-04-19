import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PostFormSchema, postFormSchema } from "../../model/postFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { createPost } from "entities/post/api/api";

export const PostForm = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [files, setFiles] = useState([]);

  const mutate = useMutation(createPost, {
    onError: (error: AxiosError) =>
      setErrorMessage(error?.response?.data?.message ?? "Something went wrong"),
    onSuccess: () => {
      navigate("/posts");
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postFormSchema),
    mode: "onBlur",
  });

  const onSubmit = useCallback(({ title, content, price }: PostFormSchema) => {
    setErrorMessage("");
    mutate.mutate({ title, content, price, files });
  }, []);

  const uplaodFile = (input: any) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(input.target.files[0]);
      reader.onload = (e) => {
        setFiles([...files, e.target?.result]);
      };
    }
  };

  return (
    <Card className="dark:bg-neutral-950 p-4 bg-neutral-100 min-w-[600px] w-min flex">
      <CardBody>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-6"
        >
          <Input
            variant="bordered"
            classNames={{
              errorMessage: "text-md",
            }}
            size="lg"
            type=""
            label="Title"
            placeholder="Title"
            labelPlacement="outside"
            isInvalid={!!errors.title}
            isDisabled={mutate.isLoading}
            errorMessage={errors.title?.message}
            {...register("title", { required: "Title is required" })}
          />
          <Input
            variant="bordered"
            classNames={{
              errorMessage: "text-md",
            }}
            size="lg"
            label="Content"
            placeholder="Content"
            labelPlacement="outside"
            isInvalid={!!errors.content}
            isDisabled={mutate.isLoading}
            errorMessage={errors.content?.message}
            {...register("content", { required: "Content is required" })}
          />
          <Input
            variant="bordered"
            classNames={{
              errorMessage: "text-md",
            }}
            size="lg"
            type=""
            pattern="[0-9]*"
            type="number"
            label="Price"
            placeholder="Price"
            labelPlacement="outside"
            isInvalid={!!errors.price}
            isDisabled={mutate.isLoading}
            errorMessage={errors.price?.message}
            {...register("price", { required: "Price is required" })}
          />
          <Input type="file" onChange={uplaodFile} />
          <div className="flex gap-4">
            {files.map((file) => (
              <div key={file}>
                <Image
                  src={file}
                  alt="Card background"
                  className="object-cover rounded-xl"
                  width={150}
                />
              </div>
            ))}
          </div>
          <Button
            size="lg"
            type="submit"
            isLoading={mutate.isLoading}
            className="w-full bg-white text-black font-bold text-xl"
          >
            Create post
          </Button>
          {errorMessage && (
            <p className="text-red-500 font-bold">{errorMessage}</p>
          )}
        </form>
      </CardBody>
    </Card>
  );
};
