import Category from './Category';
import { useEffect, useState, useCallback, useMemo } from 'react';
import ReceipeList from './Receipe/ReceipeList.jsx';
import { useSearchParams } from 'react-router-dom';
import Loader from './Loader.jsx';
import { defaultCategories } from '../state/State.js';

// Move outside component for clarity and to avoid re-creation on each render
const validateCategory = category => 
    defaultCategories.includes(category) ? category : 'Vegetarian';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const urlCategory = searchParams.get('category');

    // Memoize validatedUrlCategory so validateCategory is only called when urlCategory changes
    const validatedUrlCategory = useMemo(() => validateCategory(urlCategory), [urlCategory]);
    const [selectedCategory, setSelectedCategory] = useState(validatedUrlCategory);

    // Keep selectedCategory in sync with validatedUrlCategory
    useEffect(() => {
        if (selectedCategory !== validatedUrlCategory) {
            setSelectedCategory(validatedUrlCategory);
        }
    }, [validatedUrlCategory, selectedCategory]);

    // Memoize handleCategory to avoid unnecessary re-renders
    const handleCategory = useCallback((category) => {
        setSelectedCategory(category);
        setSearchParams({ category });
    }, [setSearchParams]);

    // Memoize fetchRecipes to avoid unnecessary re-creations
    const fetchRecipes = useCallback(async () => {
        setLoading(true);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
        const data = await response.json();
        setRecipes(data.meals);
        setLoading(false);
    }, [selectedCategory]);

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    return (
        <>
            <Category handleCategory={handleCategory} selected={selectedCategory} />
            {isLoading ? <Loader /> : <ReceipeList recipes={recipes} />}
        </>
    );
}
