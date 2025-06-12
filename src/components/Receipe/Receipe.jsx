import { fetchRandom, getMeal } from '../../Api/Api.js';
import { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

function Receipe() {
    const [recipes, setRecipes] = useState([]);
    const { mealId } = useParams();

    useEffect(() => {
        (async () => {
            const data = mealId ? await getMeal(mealId) : await fetchRandom();
            setRecipes(data.meals);
        })();
    }, [mealId]);

    const getIngredients = (meal) => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push({ ingredient, measure });
            }
        }
        return ingredients;
    };

    return (
        <>
            {recipes.map(meal => (
                <Paper 
                    elevation={6} 
                    key={meal.strMeal} 
                    className="receipe-component"
                    sx={{ p: 4 }}
                >
                    <Typography 
                        variant="h4" 
                        gutterBottom 
                        sx={{ 
                            mb: 4,
                            textAlign: 'center'
                        }}
                    >
                        {meal.strMeal}
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box
                                component="img"
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 2,
                                    boxShadow: 3
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                                Ingredients
                            </Typography>
                            <List>
                                {getIngredients(meal).map(({ ingredient, measure }, index) => (
                                    <ListItem key={index} sx={{ py: 0.5 }}>
                                        <ListItemText 
                                            primary={`${ingredient}: ${measure}`}
                                            sx={{
                                                '& .MuiListItemText-primary': {
                                                    fontSize: '1.1rem'
                                                }
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="h5" sx={{ m: 1, fontWeight: 'bold' }}>
                                Instructions
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            {meal.strInstructions.split('\n').map((instruction, index) => (
                                instruction.trim() && (
                                    <Typography 
                                        key={index} 
                                        paragraph 
                                        sx={{ 
                                            m: 1,
                                            lineHeight: 1.8,
                                            fontSize: '1.1rem',
                                            textAlign: 'left'
                                        }}
                                    >
                                        {instruction}
                                    </Typography>
                                )
                            ))}
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </>
    );
}

export default Receipe;