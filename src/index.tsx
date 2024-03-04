import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/iconfont/iconfont.css";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router/index";
import "antd/dist/antd.variable.min.css";
// import "highlight.js/styles/darcula.css";
import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#5A00FF",
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={routerConfig}></RouterProvider>);
