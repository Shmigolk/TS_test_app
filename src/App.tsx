import * as React from "react";
import {Box} from "@mui/material";

import SearchBar from "./components/SerachBar";
import DisplayComp from "./components/DisplayComp";
import ModalWindow from "./components/ModalWindow"



export default function App(){

    const [open, setOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState('')
    const handleOpen = (e: any) => {
        setModalType(e.target.name)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    return (
        <Box display={'flex'} flexDirection={'column'} gap={'1em'}  sx={{
            padding: '2em',
            minHeight: '90vh',
            backgroundColor: '#F0F0F0',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <SearchBar/>
            <ModalWindow open={open} handleOpen={handleOpen} handleClose={handleClose} modalType={modalType}/>
            <DisplayComp/>

        </Box>
    )
}