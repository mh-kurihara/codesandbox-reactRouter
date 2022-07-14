import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    Children: <Page2 />
  },
  {
    // :idはUrlParameterで扱うということ
    path: "/:id",
    exact: false,
    Children: <UrlParameter />
  }
];
