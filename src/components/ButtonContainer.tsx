import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonContainer() {
    return (
        <Stack spacing={2} direction="row" sx={{
            width: '70%'
        }}>
            <Button variant="outlined">Create new file</Button>
            <Button variant="outlined">Create new folder</Button>
        </Stack>
    );
}