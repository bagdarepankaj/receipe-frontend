const fetchRandom = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await response.json();
    return data;
}
const getMeal = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await response.json()
    return data;

}

export { fetchRandom, getMeal }