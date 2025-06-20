import React from 'react'
import Grid from '@mui/material/Grid2'
import { Card, CardContent } from '@mui/material'
import { initialState } from '../../state/Reducer'
import { Link } from 'react-router-dom'

function AreaList() {
    return (
        <div>
            <h1 style={{ color: 'white' }}>Area</h1>
            <Grid container spacing={2}>
            {initialState.areas.map((area) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={area}>
                    <Card sx={{
                        '&:hover': {
                            transform: 'scale(1.06)'
                        },
                        transition: 'transform 0.3s ease-in-out',
                    }}>
                        <CardContent>
                            <h3>{area}</h3>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </div>
    )
}

export default AreaList;
