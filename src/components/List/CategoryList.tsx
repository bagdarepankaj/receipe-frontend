import React from 'react'
import { initialState } from '../../state/Reducer'
import { Card, CardContent } from '@mui/material'
import Grid from '@mui/material/Grid2' 
import { Link } from 'react-router-dom'

function CategoryList() {
  return (
    <>
      <h1 style={{ color: 'white' }}>Categories</h1>
      <Grid container spacing={3}>
          {initialState.categories.map(category => (
            <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={category}>
              <Link to={`/home?category=${category}`}>
                <Card sx={{
                  '&:hover': {
                    transform: 'scale(1.06)'
                  },
                  transition: 'transform 0.3s ease-in-out',
                  }}>
                    <CardContent>
                      <h3>{category}</h3>
                    </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default CategoryList;
