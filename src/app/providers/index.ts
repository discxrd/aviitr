import compose from "compose-function";
import { withQuery } from "./with-query";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withNext } from "./with-next";

export const withProviders = compose(
  withQuery,
  withRouter,
  withStore,
  withNext
);
