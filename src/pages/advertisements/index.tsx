import NavigationBar from "widgets/NavigationBar/ui";
import PostCategorySelector from "widgets/PostCategorySelector/ui";
import AdvListTypeSelector from "features/AdvListTypeSelector/ui";
import Footer from "widgets/Footer/ui";
import AdvertisementList from "widgets/AdvertisementList/ui";
import { Post } from "entities/post";
import { useEffect, useState } from "react";
import { getPosts } from "entities/post/api/api";
import { useMutation } from "react-query";

const Advertisements = () => {
  const [postList, setPostList] = useState<Post[]>([
    { id: "qwe", title: "test", content: "test", username: "test", price: 10 },
  ]);

  const mutate = useMutation(getPosts, {
    onSuccess: (data) => {
      setPostList(data.data);
    },
  });

  const fetchPosts = () => {
    mutate.mutate();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="sm:pl-64 h-full dark:bg-background bg-neutral-100">
        <PostCategorySelector />{" "}
        <div className="sm:pt-16 sm:px-[10%] w-full ">
          <p className="py-5 text-3xl font-medium">Все объявления</p>
          <div className="py-5">
            <AdvListTypeSelector />
          </div>
          <AdvertisementList posts={postList} />
          <div className="flex p-5 w-full justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisements;
