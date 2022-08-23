import * as React from 'react';
import {Box, Typography, Button} from "@mui/material";

export default function DisplayComp(){
    return(
        <Box sx={{
            width: '70%'
        }}>
            <Box display={'flex'} flexDirection={'row'} sx={{
                justifyContent:'space-between',
                alignItems: "baseline"
            }} >
                <Typography variant="body1" gutterBottom>
                    this/is/going to be a root/string
                </Typography>
                <Button>Back</Button>
            </Box>
            <Box sx={{
                width: "100%",
                height: '50vh',
                border: '1px solid gray'
            }}>

            </Box>
        </Box>

    )
}