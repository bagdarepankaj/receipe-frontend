import { Paper } from '@mui/material';
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import { FavContext } from '../../context/FavouritesContext';

function ReceipeList({ recipes }) {

  const navigate = useNavigate()
  const { favourites, dispatch } = useContext(FavContext);
  
  const added = (meal) => {
    return meal && meal.idMeal && favourites.find(fav => fav.idMeal === meal.idMeal)
  }

  if (!recipes || !Array.isArray(recipes)) {
    return <div>No recipes available</div>;
  }

  return (
    <Grid container spacing={3}>
      {recipes.map( meal => {
        if (!meal || !meal.strMeal || !meal.idMeal) {
          return null;
        }

        return (
          <Grid size={{ lg: 4, md: 6, sm: 12 }} key={meal.strMeal} onClick={() => navigate(`/receipe/${meal.idMeal}`)} >
            <Paper 
              elevation={6}
              sx={{ 
                p: 2, 
                position: 'relative',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                }
              }}
            >
              <Typography variant='h5' gutterBottom>{meal.strMeal}</Typography>
              {added(meal) ? 
                <FavoriteIcon 
                  color='error'
                  sx={{
                    position: 'absolute',
                    m: 1,
                    top: 8,
                    right: 10,
                    fontSize: 25,
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch({type: "Remove", payload: {id: meal.idMeal}})
                  }}
                /> : 
                <FavoriteBorderIcon 
                  color='error'
                    sx={{
                      position: 'absolute',
                      m: 1,
                      top: 8,
                      right: 10,
                      fontSize: 25,
                      cursor: 'pointer'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({type: "Add", payload: meal})
                    }}
                />
              }
              <img 
                src={meal.strMealThumb}
                alt={meal.strMeal}
                loading="lazy"
                style={{ width: "100%", height: "auto", borderRadius: 5 }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                }}
              />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  )
}

export default ReceipeList
