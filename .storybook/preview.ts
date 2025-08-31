import type { Preview } from "@storybook/react-vite";
import { ThemeDecorator } from "../src/shared/config/storybook";

import "../src/app/styles/index.scss";

const preview: Preview = {
    globalTypes: {
        theme: {
            name: "Theme",
            description: "App Theme",
            toolbar: {
                icon: "circleHollow",
                items: [
                    { value: "blue-theme", title: "Blue" },
                    { value: "pink-theme", title: "Pink" },
                ],
                dynamicTitle: true,
            },
            defaultValue: "pink-theme",
        },
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [ThemeDecorator],
};

export default preview;
