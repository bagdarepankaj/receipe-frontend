import { useState, useEffect } from "react";
import { TextField, MenuItem, Box, Autocomplete } from "@mui/material";
import { initialState } from "../state/Reducer";
import { SetURLSearchParams } from "react-router-dom";

const divStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
};
const menus = ["Category", "Area"];

export default function SearchBar({
  setSearchParams,
}: {
  setSearchParams: SetURLSearchParams;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("Category");
  const [suggestions, setSugestions] = useState(getSuggestions("Category"));

  function getSuggestions(typ: string): string[] {
    switch (typ) {
      case "Category":
        return initialState.categories;
      case "Area":
        return initialState.areas;
      case "Ingredient":
        return initialState.ingredients;
      case "Name":
        return suggestions;
      default:
        return [];
    }
  }

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm("");
    const newType = event.target.value;
    setType(newType);
    setSugestions(getSuggestions(newType));
  };

  useEffect(() => {
    if (!searchTerm) return;
    const timer = setTimeout(() => {
      if (suggestions.includes(searchTerm)) {
        console.log(`Searching for ${searchTerm} in ${type}`);
        type === "Category"
          ? setSearchParams({ category: searchTerm })
          : setSearchParams({ area: searchTerm });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, type]);

  return (
    <Box display="flex" gap={2} mb={2} mt={2}>
      <TextField
        select
        value={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleTypeChange(e)
        }
        sx={{
          backgroundColor: "white",
          color: "black",
          minWidth: 200,
          borderRadius: 1,
          ...divStyles,
        }}
        variant="outlined"
      >
        {menus.map((menu) => (
          <MenuItem value={menu} key={menu}>
            {menu}
          </MenuItem>
        ))}
      </TextField>
      <Autocomplete
        freeSolo
        options={suggestions.filter((option) =>
          option.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        inputValue={searchTerm}
        onInputChange={(_, newValue) => setSearchTerm(newValue)}
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          flex: 1,
          ...divStyles,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="search"
            variant="outlined"
            placeholder={`Search by ${type}...`}
          />
        )}
      />
    </Box>
  );
}
