import { Suspense } from "react";
import { AppRouter } from "./providers";

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
        </Suspense>
    );
};

export default App;
