import Category from './Category';
import { useEffect, useState } from 'react';
import ReceipeList from './Receipe/ReceipeList.jsx';
import { useSearchParams } from 'react-router-dom';
import Loader from './Loader.jsx';
import { defaultCategories } from '../state/State.js';
import { getAreaRecipes, getCategoryReceipes } from '../Api/Api.js';
// Move outside component for clarity and to avoid re-creation on each render
const validateCategory = category => 
    defaultCategories.includes(category) ? category : 'Vegetarian';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const urlCategory = searchParams.get('category');
    const areaFromUrl = searchParams.get('area');
    // Memoize validatedUrlCategory so validateCategory is only called when urlCategory changes
    const validatedCategory = validateCategory(urlCategory);
    const handleCategory = category => setSearchParams({ category });

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            let data;
            if (areaFromUrl) {
                data = await getAreaRecipes(areaFromUrl || 'Indian');
            } else {
                data = await getCategoryReceipes(validatedCategory);
            }
            setRecipes(data.meals);
            setLoading(false);
        }
        fetchRecipes();
    }, [searchParams]);

    return (
        <>
            <Category handleCategory={handleCategory} />
            {isLoading ? <Loader /> : <ReceipeList recipes={recipes} />}
        </>
    );
}
