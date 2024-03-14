import { Routing } from "pages";
import { withProviders } from "./providers";

import "./styles/index.css";

const App = () => {
  return (
    <div className="bg-background text-foreground h-screen">
      <Routing />
    </div>
  );
};

export default withProviders(App);
