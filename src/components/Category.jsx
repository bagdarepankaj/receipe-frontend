import { Fab } from "@mui/material";
import { defaultCategories } from "../state/State.js";
import { Box } from "@mui/material";

function Category({ handleCategory }) {
  return (
    <Box sx={{ m: 3 }}>
      {defaultCategories.map((category) => (
        <Fab
          key={category}
          color="secondary"
          variant="extended"
          aria-label="edit"
          onClick={() => handleCategory(category)}
        >
          {category}
        </Fab>
      ))}
    </Box>
  );
}
export default Category;
