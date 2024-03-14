import { PostForm } from "features/post/create-post/ui/PostForm/PostForm";
import NavigationBar from "widgets/NavigationBar/ui";

const CreatePostPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="sm:pl-64 h-full dark:bg-background bg-neutral-100">
        <div className="flex justify-center p-8 w-full">
          <PostForm />
        </div>
      </div>
    </>
  );
};

export default CreatePostPage;
