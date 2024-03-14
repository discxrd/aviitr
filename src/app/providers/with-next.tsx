import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

export const withNext = (component: () => React.ReactNode) => () =>
  <NextUIProvider>{component()}</NextUIProvider>;
