import { HomePage } from "@/pages/Home";
import LoginPage from "@/pages/Login/ui/LoginPage";
import { NotFoundPage } from "@/pages/NotFound";
import type { RouteProps } from "react-router";

const AppRoutes = {
    HOME: "home",
    LOGIN: "login",
    NOT_FOUND: "not_found",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage />,
    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage />,
    },
    {
        path: routePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
