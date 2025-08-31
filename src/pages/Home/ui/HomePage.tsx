import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button } from "@/shared/ui";
import { useEffect, useState } from "react";
const HomePage = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div className={styles.pageWrapper}>
            <Header />

            <Button
                onClick={() => {
                    setError(true);
                }}
            >
                Click
            </Button>
            <Footer />
        </div>
    );
};

export default HomePage;
