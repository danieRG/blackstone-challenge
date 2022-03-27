import { Box } from '@mui/material';
import { Header } from '../header';
import { ChipComponent } from '../chip/ChipComponent';
import { CustomizedSnackbar } from '../snackbar/CustomizedSnackbar';

export const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <ChipComponent />
      {children}
      <CustomizedSnackbar />
    </Box>
  )
}
