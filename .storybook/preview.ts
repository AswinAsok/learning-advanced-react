import type { Preview } from "@storybook/react-vite";
import { ThemeDecorator } from "../src/shared/config/storybook";

import "../src/app/styles/index.scss";

const preview: Preview = {
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
