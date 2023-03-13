import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';

export default function BasicTextFields() {
    return (
        <div>
            <div className="heading-container">
                <h3>
                    Login Form
                </h3>
            </div>

            <Box 
                component="form"
                sx={{ 
                    '& > :not(style)': { m:1, width:'25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            </Box>

            <Button />
        </div>
    );
}