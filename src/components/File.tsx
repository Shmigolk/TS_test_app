import * as React from "react";
import {Box} from "@mui/material";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

export default function FileComponent() {
    return <Box sx={{
        width: "100px",
        height: '100px'
    }}>
        <FolderOpenOutlinedIcon />
    </Box>
}
