import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Poppins',
      },
    },
  },
});
