import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

interface ModalWindowStructure {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void
}

export default function ModalWindow({open, handleOpen, handleClose}: ModalWindowStructure) {

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-start',
                gap: '5em'
            }}>
                <Button variant="outlined" onClick={handleOpen}>Create new File</Button>
                <Button variant="outlined" onClick={handleOpen}>Create new Folder</Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{}}
            >
                <Box sx={style}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em'
                    }}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" sx={{
                        borderBottom: '1px solid gray'
                    }}>
                        New Folder
                    </Typography>
                    <TextField placeholder={'name...'} sx={{
                        width: '100%'
                    }}/>
                    </Box>
                    <Box sx={{
                        width: '100%',
                    }}>
                        <Button variant="outlined" >Cancel</Button>
                        <Button variant="outlined" >Create</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
