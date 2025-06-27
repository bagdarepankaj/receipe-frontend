import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader.jsx";
import Category from "./Category";
import SearchBar from "./SearchBar.tsx";
import ReceipeList from "./Receipe/ReceipeList.jsx";
import { defaultCategories } from "../state/State.js";
import { getAreaRecipes, getCategoryReceipes } from "../Api/Api.js";

const validateCategory = (category) =>
  defaultCategories.includes(category) ? category : "Vegetarian";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.get("category");
  const areaFromUrl = searchParams.get("area");

  const validatedCategory = validateCategory(urlCategory);
  const handleCategory = (category) => setSearchParams({ category });

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      let data;
      if (areaFromUrl) {
        data = await getAreaRecipes(areaFromUrl || "Indian");
      } else {
        data = await getCategoryReceipes(validatedCategory);
      }
      setRecipes(data.meals);
      setLoading(false);
    };
    fetchRecipes();
  }, [searchParams]);

  return (
    <>
      <Category handleCategory={handleCategory} />
      {/* <SearchBar setSearchParams={setSearchParams} /> */}
      {isLoading ? <Loader /> : <ReceipeList recipes={recipes} />}
    </>
  );
}
