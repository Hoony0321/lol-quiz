import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
} from "@chakra-ui/react";

const textStyles = defineTextStyles({
  heading: {
    value: {
      fontSize: { base: "4rem", md: "6rem", lg: "8rem" },
      fontWeight: "800",
      lineHeight: "1.2",
    },
  },
  subtitle: {
    value: {
      fontSize: { base: "2rem", md: "3rem", lg: "4rem" },
      fontWeight: "600",
      lineHeight: "1.4",
    },
  },
  button: {
    value: {
      fontSize: { base: "2rem", md: "3rem", lg: "4rem" },
      fontWeight: "700",
    },
  },
});

const customConfig = defineConfig({
  theme: {
    textStyles,
    tokens: {
      colors: {
        primary: {
          value: "#494BBE",
        },
        secondary: {
          value: "#F5F5F5",
        },
        text: {
          default: {
            value: "#333333",
          },
          light: {
            value: "#888888",
          },
        },
        background: {
          default: {
            value: "#FFFFFF",
          },
          muted: {
            value: "#F0F0F0",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
