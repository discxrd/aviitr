import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginFormSchema, loginFormSchema } from "../../model/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "entities/session";
import { useMutation } from "react-query";
import { LoginResponse } from "shared/api";
import { AxiosError } from "axios";
import { sessionSlice } from "entities/session";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const mutate = useMutation(login, {
    onError: (error: AxiosError) =>
      setLoginErrorMessage(
        error?.response?.data?.message ?? "Something went wrong"
      ),
    onSuccess: (data: LoginResponse) => {
      dispatch(sessionSlice.actions.setSessionData(data));
      navigate("/posts");
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    mode: "onBlur",
  });

  const onSubmit = useCallback(({ email, password }: LoginFormSchema) => {
    setLoginErrorMessage("");
    mutate.mutate({ email, password });
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
            type="email"
            label="Email"
            placeholder="Enter your email"
            labelPlacement="outside"
            isInvalid={!!errors.email}
            isDisabled={mutate.isLoading}
            errorMessage={errors.email?.message}
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
          />
          <Input
            size="lg"
            classNames={{
              errorMessage: "text-md",
            }}
            variant="bordered"
            startContent={
              <LockClosedIcon className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            isInvalid={!!errors.password}
            isDisabled={mutate.isLoading}
            errorMessage={errors.password?.message}
            autoComplete="current-password"
            {...register("password", { required: "Password is required" })}
          />
          <Button
            size="lg"
            type="submit"
            isLoading={mutate.isLoading}
            className="w-full bg-white text-black font-bold text-xl"
          >
            Login
          </Button>
          {loginErrorMessage && (
            <p className="text-red-500 font-bold">{loginErrorMessage}</p>
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
