import { Routes, Route } from "react-router";
import { lazy } from "react";

const PostListPage = lazy(() => import("./post-list"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
    </Routes>
  );
};
