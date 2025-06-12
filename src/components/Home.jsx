import Category from './Category';
import { useEffect, useState } from 'react';
import ReceipeList from './Receipe/ReceipeList.jsx';
import Loader from './Loader.jsx';

export default function Home() {

    const [selectedCategory, setSelectedCategory] = useState('Vegetarian');
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const handleCategory = (category) => {
        setSelectedCategory(category)
    }

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
            const data = await response.json();
            console.log(data);
            setRecipes(data.meals)
            setLoading(false)
        })();
    }, [selectedCategory])
  
    return (
        <>
            <Category handleCategory={handleCategory} selected={selectedCategory} />
            { isLoading ? <Loader /> : <ReceipeList recipes={recipes} /> }            
        </>
  );
}
