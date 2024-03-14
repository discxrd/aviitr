import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useParams } from "react-router";
import NavigationBar from "widgets/NavigationBar/ui";

const PostPage = () => {
  const title = useParams().title;
  const content = useParams().content;
  const username = useParams().username;
  const price = useParams().price;

  return (
    <>
      <NavigationBar />
      <div className="sm:pl-64 h-full dark:bg-background bg-neutral-100 flex justify-center align-center">
        <Card
          disableAnimation
          disableRipple
          className="dark:bg-neutral-950 p-4 bg-neutral-100 min-w-[600px] w-min h-min flex"
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{username}</p>
            <small className="text-default-500 text-large">{price}$</small>
            <h4 className="font-bold text-large">{title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
              width={800}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default PostPage;
