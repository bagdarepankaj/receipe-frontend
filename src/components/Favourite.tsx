import React from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useContext } from "react";
import { FavContext } from "../context/FavouritesContext";

export default function Favourite() {
    const { state, dispatch } = useContext(FavContext);

    return (
        <Box sx={{ p: 4, ml: 4, mr: 4 }}>
            <Typography 
                variant="h4" 
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center'
                }} 
                gutterBottom
            >
                My Favourites
            </Typography>
            
            <Grid container spacing={3}>
                {state.favourites.map((obj: any) => (
                    <Grid size={{ sm: 6, xs: 12, md: 4, lg: 3 }} key={obj.strMeal}>
                        <Card 
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.04)',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                                },
                                cursor: 'pointer'
                            }}
                        >
                            <CardMedia>
                                <img
                                    src={obj.strMealThumb}
                                    alt={obj.strMeal}
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover"
                                    }}
                                />
                            </CardMedia>
                            <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
                                    {obj.strMeal}
                                </Typography>
                                {obj.author && (
                                    <Typography variant="body2" color="text.secondary">
                                        By {obj.author}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}