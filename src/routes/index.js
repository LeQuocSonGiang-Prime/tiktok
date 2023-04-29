import Home from "~/pages/Home/index";
import Following from "~/pages/Following/index";
import Profile from "~/pages/Profile/index";
import Upload from "~/pages/Upload/index";

import { HeaderOnly } from "~/component/Layout";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly
  }

];
