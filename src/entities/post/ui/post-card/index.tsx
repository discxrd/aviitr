import { PropsWithChildren } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

export type PostCardProps = PropsWithChildren<{
  data?: import("entities/post").Post;
  onPress?: () => void;
}> &
  import("@nextui-org/react").CardProps;

const PostCard = ({ data, onPress, ...cardProps }: PostCardProps) => {
  return (
    <div>
      <Card shadow="sm" isPressable onPress={onPress} {...cardProps}>
        <CardBody className="p-0 ">
          <div className="bg-neutral-200 w-full object-cover h-[140px]" />
        </CardBody>
        <CardFooter className="text-small flex flex-col gap-2 text-md">
          <div className="w-full justify-between flex flex-row">
            <p>{data?.title}</p>
            <b className="text-default-700">{data?.price}$</b>
          </div>
        </CardFooter>
        <CardFooter className="text-small flex flex-col gap-2 text-md">
          <div className="w-full justify-between flex flex-row">
            <p>{data?.content}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;
