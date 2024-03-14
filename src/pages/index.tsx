import { Routes, Route } from "react-router";
import { lazy } from "react";
import { RouteProps } from "shared/types";
import {
  ArrowLeftEndOnRectangleIcon,
  HomeIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

// @TODO: бля он тут ваще не нужен

export const routes: RouteProps[] = [
  {
    name: "Posts",
    path: "/posts",
    component: lazy(() => import("./advertisements")),
    icon: <HomeIcon />,
    hidden: false,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(() => import("./viewer/auth/login")),
    icon: <ArrowLeftEndOnRectangleIcon />,
    hidden: true,
  },
  {
    name: "Create Post",
    path: "/create",
    component: lazy(() => import("./posts/create-post")),
    icon: <PlusIcon />,
    hidden: false,
  },
];
const PostPage = lazy(() => import("./posts/post/ui"));

export const Routing = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route
        key={"Post"}
        path="/post/:id/:title/:content/:username/:price"
        element={<PostPage />}
      />
    </Routes>
  );
};
