import React from 'react'
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

function ReceipeList({ recipes }) {

  const navigate = useNavigate()
  return (
    <Grid container className="receipe-component" spacing={2}>
      {recipes.map( meal => (
        <Grid flex='grow' size={{ md: 6, sm: 12 }} key={meal.strMeal} onClick={() => navigate(`/receipe/${meal.idMeal}`)} >
            <Paper elevation={6} sx={{ padding: '10px'}}>
            <Typography variant='h5' gutterBottom>{meal.strMeal}</Typography>
            <img 
                src={meal.strMealThumb}
                alt={meal.strMeal}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                />
            </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default ReceipeList
