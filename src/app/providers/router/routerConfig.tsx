import { HomePage } from "@/pages/Home";
import type { RouteProps } from "react-router";

const AppRoutes = {
    HOME: "home",
    LOGIN: "login",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LOGIN]: "/login",
};

export const routeConfig: RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage />,
    },
];
