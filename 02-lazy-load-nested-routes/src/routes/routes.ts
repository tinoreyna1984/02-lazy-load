import { lazy, LazyExoticComponent } from "react";
//import LazyLayout from "../01-lazy-load/layout/LazyLayout";
import { NoLazyComponent } from "../01-lazy-load/pages/NoLazyComponent";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// lazy load con React.lazy()
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazy-load/layout/LazyLayout"));

export const routes: Route[] = [
  // se indica una ruta padre para las rutas que serán cargadas como lazy load
  { to: "/lazyload/", path: "/lazyload/*", Component: LazyLayout, name: "Lazy Layout" },
  { to: "/no-lazy", path: "no-lazy", Component: NoLazyComponent, name: "No Lazy" },
];
