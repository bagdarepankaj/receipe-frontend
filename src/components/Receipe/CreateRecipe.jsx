import { Container, Typography, Paper } from "@mui/material";
import { TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIngredient from "./AddIngredient";
import { Add } from "@mui/icons-material";

function CreateRecipe() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Container>
      <Paper elevation={6} sx={{p: 4, m: 4}}>
        <Typography variant="h4" sx={{ justifyContent: 'center'}}>
          Create Recipe
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Name" 
            name="name" 
            margin="normal" 
            fullWidth 
            required 
            placeholder="Enter recipe name..."
          />
          <TextField 
            label="Description"
            name="description"
            margin="normal"
            placeholder="Enter recipe description..."
            fullWidth
            required 
          />
          <AddIngredient />
          <TextField
            label="Instructions"
            name="instructions"
            margin="normal"
            fullWidth
            required
            multiline
            rows={4}
            placeholder="Enter recipe instructions..."
          />
          <Button type="submit" variant="contained" color="secondary">Create</Button>
        </form>
      </Paper>
    </Container>
  )
}
export default CreateRecipe;