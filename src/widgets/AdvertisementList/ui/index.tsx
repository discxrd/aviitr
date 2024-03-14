import { Post } from "entities/post";
import PostCard from "entities/post/ui/post-card";
import { useNavigate } from "react-router";

type PostListProps = {
  posts: Post[];
};

const AdvertisementList = ({ posts }: PostListProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-wrap gap-4 w-full">
        {posts.map((post) => (
          <div>
            <PostCard
              onPress={() =>
                navigate(
                  `/post/${post.id}/${post.title}/${post.content}/${post.username}/${post.price}`
                )
              }
              className="w-full sm:min-w-[100px] md:min-w-[300px] lg:min-w-[300px] xl:min-w-[300px]"
              key={post.id}
              data={post}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementList;
