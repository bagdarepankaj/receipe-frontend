import { Fab } from "@mui/material"
import { useEffect, useState } from "react"
import { defaultCategories } from '../state/State.js'

function Category({ handleCategory }) {

    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    //         const data = await response.json();
    //         console.log(data)
    //         setCategories(data.categories)
    //     })();
    // }, [])

    return (
        <div style={{ margin: '10px' }}>
            {defaultCategories.map( category => (
                <Fab key={category.strCategory} 
                    color="secondary" 
                    variant="extended" 
                    aria-label="edit"
                    onClick={() => handleCategory(category.strCategory)}
                    >
                    {category.strCategory}
                </Fab>
            ))}
        </div>
    )
}
export default Category;