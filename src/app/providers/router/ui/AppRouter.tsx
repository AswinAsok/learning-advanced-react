import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
            ))}
        </Routes>
    );
};

export default AppRouter;
