import { fetchRandom, getMeal } from '../../Api/Api.js';
import { useEffect, useState } from 'react';
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useParams } from 'react-router-dom';
// import axios from 'axios';
function Receipe() {

    const [receipes, setReceipes] = useState([]);
    const { mealId } = useParams();
    useEffect(() => {
        (async () => {
            const data = mealId ? await getMeal(mealId) : await fetchRandom();
            setReceipes(data.meals)
        })();
    }, [])

    return (
        <>
        {receipes.map( meal => (
            <Paper elevation={6} key={meal.strMeal} className="receipe-component">
                <b>{meal.strMeal}</b>
                <Grid container >
                    <Grid size={{ md: 7, sm: 6 }}>
                        <img 
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            loading="lazy"
                            style={{ width: "100%", height: "auto"}}
                            />
                    </Grid>
                    <Grid size={{ md: 5, sm: 6 }}>
                        <b>Ingredients</b>
                        <p>{meal.strIngredient1} : {meal.strMeasure1}</p>
                        <p>{meal.strIngredient2} : {meal.strMeasure2}</p>
                        <p>{meal.strIngredient3} : {meal.strMeasure3}</p>
                        <p>{meal.strIngredient4} : {meal.strMeasure4}</p>
                        <p>{meal.strIngredient5} : {meal.strMeasure5}</p>
                        <p>{meal.strIngredient6} : {meal.strMeasure6}</p>
                        <p>{meal.strIngredient7} : {meal.strMeasure7}</p>
                        <p>{meal.strIngredient8} : {meal.strMeasure8}</p>
                        <p>{meal.strIngredient9} : {meal.strMeasure9}</p>
                        <p>{meal.strIngredient10} : {meal.strMeasure10}</p>
                        <p>{meal.strIngredient11} : {meal.strMeasure11}</p>
                        <p>{meal.strIngredient12} : {meal.strMeasure12}</p>
                    </Grid>
                    <Grid>
                        <b>Instructions</b>
                        <p>{meal.strInstructions}</p>
                    </Grid>
                </Grid>
            </Paper>
        ))}
        </>
    )
}

export default Receipe;