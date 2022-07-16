import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// lazy load con React.lazy()
const Lazy01 = lazy(() => import(/* webpackChunkName: "LazyLoad01" */ "../01-lazy-load/pages/LazyPage01"));
const Lazy02 = lazy(() => import(/* webpackChunkName: "LazyLoad02" */ "../01-lazy-load/pages/LazyPage02"));
const Lazy03 = lazy(() => import(/* webpackChunkName: "LazyLoad03" */ "../01-lazy-load/pages/LazyPage03"));

export const routes: Route[] = [
  { to: "/lazy1", path: "lazy1", Component: Lazy01, name: "Lazy-1" },
  { to: "/lazy2", path: "lazy2", Component: Lazy02, name: "Lazy-2" },
  { to: "/lazy3", path: "lazy3", Component: Lazy03, name: "Lazy-3" },
];
