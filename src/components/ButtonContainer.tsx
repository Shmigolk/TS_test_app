import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonContainer({handleOpen}: any) {
    return (
        <Stack spacing={2} direction="row" sx={{
            width: '70%'
        }}>
            <Button variant="outlined" onClick={handleOpen}>Create new file</Button>
            <Button variant="outlined" onClick={handleOpen}>Create new folder</Button>
        </Stack>
    );
}