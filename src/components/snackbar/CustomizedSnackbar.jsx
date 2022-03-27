import { forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { setAlertClose } from '../../actions/ui';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbar = () => {

    const { alert } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setAlertClose(''));
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}
