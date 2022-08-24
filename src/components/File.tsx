import * as React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function FileComponent() {
    return (
        <>
            <Box sx={{
                width: "100px",
                height: '100px',
                border: '1px solid black',
                borderRadius: '10%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <InsertDriveFileIcon sx={{fontSize: 80}}/>
                <Typography>Blablah</Typography>

                {/*<FolderOpenOutlinedIcon sx={{ fontSize: 80 }}/>*/}
            </Box>
            <Box sx={{
                width: "100px",
                height: '100px',
                border: '1px solid black',
                borderRadius: '10%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <FolderOpenOutlinedIcon sx={{fontSize: 80}}/>
                <Typography>Blablah</Typography>


            </Box>
        </>
    )
}
