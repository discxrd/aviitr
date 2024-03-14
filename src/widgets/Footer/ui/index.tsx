import { Pagination } from "@nextui-org/react";

const Footer = () => {
  return (
    <div>
      <Pagination total={10} initialPage={1} showControls isCompact size="lg" />
    </div>
  );
};

export default Footer;
