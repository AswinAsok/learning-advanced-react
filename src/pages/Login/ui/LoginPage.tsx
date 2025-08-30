import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const LoginPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t("login")}</h1>
            <Link to={"/"}>Go to Home Page</Link>
        </>
    );
};

export default LoginPage;
