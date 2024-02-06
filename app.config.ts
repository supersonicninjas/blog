export default defineAppConfig({
  ui: {
    primary: "red",
    gray: "neutral",
    variables: {
      light: {
        background: "255 255 255",
        foreground: "var(--color-black)",
      },
      dark: {
        background: "var(--color-black)",
        foreground: "var(--color-gray-100)",
      },
      header: {
        height: "4rem",
        background: 'bg-black'
      },
    },
    button: {
      rounded: "rounded-full",
      default: {
        size: "md",
      },
    },
    input: {
      default: {
        size: "md",
      },
    },
    card: {
      rounded: "rounded-xl",
    },
    footer: {
      top: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
        container: "py-8 lg:py-16",
      },
      bottom: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
    page: {
      hero: {
        wrapper: "lg:py-24",
      },
    },
  },
});
