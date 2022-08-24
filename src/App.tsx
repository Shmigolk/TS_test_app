import * as React from "react";
import {Stack} from "@mui/material";

import SearchBar from "./components/SerachBar";
import DisplayComp from "./components/DisplayComp";
import ModalWindow from "./components/ModalWindow"


export default function App() {

    const [open, setOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState('')
    const handleOpen = (e: any) => {
        setModalType(e.target.name)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    return (

        <Stack spacing={2}
               alignItems={'center'}
               sx={{
                   padding: '2em',
                   minHeight: '90vh',
                   backgroundColor: '#F0F0F0',
               }}>
            <SearchBar/>
            <ModalWindow open={open}
                         handleOpen={handleOpen}
                         handleClose={handleClose}
                         modalType={modalType}/>
            <DisplayComp/>

        </Stack>
    )
}