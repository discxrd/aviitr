import { Button, Divider } from "@nextui-org/react";
import ThemeSwitcher from "features/ThemeSwitcher/ui";
import { routes } from "pages";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router";

// @TODO: Make it dynamic (mobile, pc)

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <aside className="bg-background dark:bg-neutral-950 fixed left-0 top-0 z-20 flex flex-col w-64 h-full p-3 transition-transform -translate-x-full sm:translate-x-0 justify-between">
      <div className="gap-3 flex flex-1 flex-col">
        <div className="flex w-full justify-between">
          <b className="text-2xl">aviitr.</b>
          <ThemeSwitcher />
        </div>
        <Divider />
        <Button onPress={() => navigate("/login")} variant="flat">
          <div className="w-8 h-8 stroke-primary">
            <ArrowLeftEndOnRectangleIcon />
          </div>
          <b className="w-full text-start font-medium text-lg">Sign in</b>
          {/* @TODO: Make it like feature */}
          {/* <Avatar /> */}
        </Button>
        {routes.map((route) =>
          route.hidden ? null : (
            <Button
              startContent={<div className="w-8 h-8">{route.icon}</div>}
              onPress={() => navigate(route.path)}
              variant="light"
              key={route.name}
            >
              <p className="w-full text-start font-normal text-default-500 text-lg">
                {route.name}
              </p>
            </Button>
          )
        )}
      </div>
    </aside>
  );
};

export default NavigationBar;
