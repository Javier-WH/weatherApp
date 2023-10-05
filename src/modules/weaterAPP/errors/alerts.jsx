import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Errors } from './error';
import "./alerts.css";

export default function Alerts({ error, setError }) {

    if (error === null) {
        return
    }

    const code = error.errorCode;

    if (code === Errors.APIInvalidData || code === Errors.APIConectionError) {
        return (
            <Stack sx={{ width: '100%' }} spacing={2} className='alert'>
                <Alert severity="error">{error.message}</Alert>
            </Stack>)

    }
}