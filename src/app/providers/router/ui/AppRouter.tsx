import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";
import { Suspense } from "react";

export const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({ path, element }) => (
                <Route
                    path={path}
                    element={
                        <Suspense key={path} fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    }
                    key={path}
                />
            ))}
        </Routes>
    );
};
