import React from 'react';
import Grid from "@mui/material/Grid2";
import { Add, Delete } from '@mui/icons-material';
import { TextField, Button, Typography, TextFieldProps } from "@mui/material";
import { useState } from 'react';

interface Ingredient {
    ingredient: string;
    quantity: string;
}

interface Error {
    ingredient?: string;
}

function AddIngredient() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ ingredient: '', quantity: '' }]);
    const [errors, setErrors] = useState<Error>({});

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { ingredient: '', quantity: '' }]);
    }

    const handleDeleteIngredient = (index: number) => {
        if (ingredients.length === 1) {
            setErrors({"ingredient": "You can not delete last ingredient."})
            return;
        }
        setIngredients(ingredients.filter((_, i) => i !== index));
    }

    const handleUpdateIngredient = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const {name, value} = event.target;
        const ingredientsCopy = [...ingredients];
        ingredientsCopy[index] = { ...ingredientsCopy[index], [name]: value };
        setIngredients(ingredientsCopy);
    }

    return (
        <>
        {ingredients.map((obj, index) => (
            <Grid key={index} container>
                <Grid size={{md: 10, xs: 12}} container spacing={2}>
                    <Grid size={{md: 6, xs: 12}}>
                        <TextField 
                            label="Ingredient" 
                            name="ingredient"
                            margin="normal" 
                            onChange={(e) => handleUpdateIngredient(e, index)}
                            value={obj.ingredient}
                            fullWidth
                            required 
                        />
                    </Grid>
                    <Grid size={{md: 6, xs: 12}}>
                        <TextField 
                            label="Quantity" 
                            name="quantity"
                            onChange={(e) => handleUpdateIngredient(e, index)}
                            margin="normal" 
                            value={obj.quantity}
                            fullWidth
                            required 
                        />
                    </Grid>
                </Grid>
                <Grid size={{md: 2, xs: 12}}>
                    <Button variant="contained" color="secondary" sx={{ mt: 3, ml: 1 }} onClick={handleAddIngredient}>
                        <Add sx={{cursor: 'pointer'}} />
                    </Button>
                    <Button variant="contained" color="error" sx={{ mt: 3, ml: 1 }} onClick={() => handleDeleteIngredient(index)} >
                        <Delete sx={{cursor: 'pointer'}} />
                    </Button>
                </Grid>
                {errors.ingredient && (
                    <Typography color='red'>
                        {errors.ingredient}
                    </Typography>
                )}
            </Grid>
        ))}
        </>
    )
}

export default AddIngredient; 