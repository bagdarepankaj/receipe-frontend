import * as React from 'react';
import { Paper, TextField } from '@mui/material';

export default function Login() {
    return (
        <Paper elevation={6} className='login-box'>
            <span style={{fontSize: 'x-large'}}>Receipe Book</span>
            <form>
                <div className='login-form'>
                    <TextField id="email" label="Email" variant="standard" sx={{width: '100%', margin: '5px 0'}} />
                    <TextField id="password" label="Password" variant="standard" sx={{width: '100%', margin: '5px 0'}} />
                </div>
            </form>
        </Paper>
    );
}
