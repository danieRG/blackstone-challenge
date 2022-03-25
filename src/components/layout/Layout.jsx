import { Box } from '@mui/material';
import { Header } from '../header';
import { ChipComponent } from '../chip/ChipComponent';

export const Layout = ({children}) => {
  return (
    <Box>
        <Header />
        <ChipComponent />
        {children}
    </Box>
  )
}
