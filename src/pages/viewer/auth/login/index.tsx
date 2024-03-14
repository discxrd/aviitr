import { LoginForm } from "features/auth/login";
import NavigationBar from "widgets/NavigationBar/ui";

const LoginPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="sm:pl-64 h-full dark:bg-background bg-neutral-100">
        <div className="flex justify-center p-8 w-full">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
