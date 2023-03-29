import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  components: {
    Alert: {
      variants: {
        toast: {
          container: {
            color: "gray.50",
            bg: "#efbae1",
          },
        },
      },
    },
  },
});
