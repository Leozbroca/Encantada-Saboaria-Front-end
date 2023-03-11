import * as React from "react";
import { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fbab47",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function PaginationOutlined(props:any) {
 
  const [pageCurrent, setPageCurrent] = React.useState(0);

  const handleChange = (event: any, value: any) => {
    setPageCurrent(value);
    switch (value) {
      case 1:
        props.setPage(1);
        break;
      case 2:
        props.setPage(2);
        break;
      case 3:
        props.setPage(3);
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination
          count={3}
          page={pageCurrent}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
}
