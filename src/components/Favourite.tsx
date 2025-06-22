import React, { useContext } from "react";
import { Card, CardContent, Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FavContext } from "../context/FavouritesContext";
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavouriteCard = ({ obj, onRemove }: { obj: any; onRemove: (id: string) => void }) => {
    return (
        <Card 
            sx={{ 
                height: '100%',
                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                    transform: 'scale(1.03)'
                }
            }}
         >
            <img
                src={obj.strMealThumb}
                alt={obj.strMeal}
                loading="lazy"
                style={{
                    width: "100%",
                    height: "auto"
                }}
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                }}
            />
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ flex: 1 }}>
                        {obj.strMeal}
                    </Typography>
                    <FavoriteIcon 
                        color='error'
                        sx={{ cursor: 'pointer' }}
                        onClick={() => onRemove(obj.idMeal)}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default function Favourite() {
    const { favourites, dispatch } = useContext(FavContext);

    const validFavourites = favourites.filter((obj: any) => obj && obj.strMeal && obj.strMealThumb);

    const handleRemove = (id: string) => {
        dispatch({ type: "Remove", payload: { id } });
    };

    return (
        <Container maxWidth="lg" sx={{ 
            py: 3,
        }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'white', textAlign: 'center' }}>
                My Favourites ({validFavourites.length})
            </Typography>

            {validFavourites.length === 0 ? (
                <Typography variant="body1" color="white" textAlign="center">
                    You haven't added any favourites yet.
                </Typography>
            ) : (
                <Grid container spacing={2}>
                    {validFavourites.map((obj: any) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={obj.idMeal}>
                            <FavouriteCard obj={obj} onRemove={handleRemove} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}