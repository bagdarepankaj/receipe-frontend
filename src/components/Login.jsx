import * as React from 'react';
import { Button, Paper, TextField } from '@mui/material';

export default function Login() {

    let [email, setEmail] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [setLogin] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response =  await fetch('http://localhost:4000/login', {   
            method: 'post',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        const result =  await response.json()
        setLogin(result.success)

        console.log('result', result)
    }

    return (
        <Paper elevation={6} className='login-box'>
            <span style={{fontSize: 'x-large'}}>Receipe Book</span>
            <form onSubmit={handleSubmit}>
                <div className='login-form'>
                    <TextField id="email" name="email" label="Email" variant="standard" onChange={(e)=> setEmail(e.target.value)} sx={{width: '100%', margin: '8px 0'}} />
                    <TextField id="password" name="password" label="Password" type= 'password' onChange={(e)=> setPassword(e.target.value)} variant="standard" sx={{width: '100%', margin: '8px 0'}} />
                    <Button type='submit' variant='contained' color='success' sx={{marginTop: '10px'}}>Login</Button>
                </div>
            </form>
        </Paper>
    );
}
