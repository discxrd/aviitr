// @TODO: Make it dynamic

import { Link } from "@nextui-org/react";

const PostCategorySelector = () => {
  return (
    <div className="bg-neutral-50 dark:bg-background w-full fixed px-5 py-3 flex flex-row sm:gap-10">
      <Link href="#" className="font-bold">
        Всё
      </Link>
      <Link href="#" className="text-default-500 font-medium">
        Электроника
      </Link>
      <Link href="#" className="text-default-500 font-medium">
        Мебель
      </Link>
      <Link href="#" className="text-default-500 font-medium">
        Квартиры
      </Link>
    </div>
  );
};

export default PostCategorySelector;
