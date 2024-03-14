import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PostFormSchema, postFormSchema } from "../../model/postFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { createPost } from "entities/post/api/api";

export const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

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
    mutate.mutate({ title, content, price });
  }, []);

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
            startContent={
              <EnvelopeIcon className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0" />
            }
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
            startContent={
              <EnvelopeIcon className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0" />
            }
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
            startContent={
              <EnvelopeIcon className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0" />
            }
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
          <Button
            size="lg"
            type="submit"
            isLoading={mutate.isLoading}
            className="w-full bg-white text-black font-bold text-xl"
          ></Button>
          {errorMessage && (
            <p className="text-red-500 font-bold">{errorMessage}</p>
          )}
          <div className="w-full text-foreground-400 font-medium">
            <Link to="/register" className="flex flex-row gap-2 text-large">
              Does not have account?
              <h1 className="font-bold text-white-400 opacity-70 underline underline-offset-2">
                Sign up
              </h1>
            </Link>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};
