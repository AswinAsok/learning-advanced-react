import { AppIcon, Button } from "@/shared/ui";
import i18n from "@/shared/config/i18n/i18n";
import { languageIconList, type SupportedLngsType } from "@/shared/config";

export const LanguageSwitcher = () => {
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "en" : "de");
    };

    const currentLanguage = i18n.language as SupportedLngsType;

    return (
        <Button theme="ghost" onClick={toggleLanguage}>
            <AppIcon Icon={languageIconList[currentLanguage]} filled />
        </Button>
    );
};
