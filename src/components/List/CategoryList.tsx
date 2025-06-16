import React from 'react'
import { initialState } from '../../state/Reducer'
import { Card, CardContent } from '@mui/material'
import Grid from '@mui/material/Grid2' 

function CategoryList() {
  return (
    <>
      <h1 style={{ color: 'white' }}>Categories</h1>
      <Grid container spacing={3}>
          {initialState.categories.map(category => (
            <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={category}>
              <Card>
                  <CardContent>
                    <h3>{category}</h3>
                  </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default CategoryList;
