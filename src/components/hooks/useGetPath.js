import { matchRoutes, useLocation } from "react-router-dom";

const routes = ["/", "detail/2"];

export const useCurrentPath = () => {
  const { pathname } = useLocation();
  return routes.find((route) => matchPath(route, pathname));
};
